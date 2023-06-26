import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../layouts';
import { Card } from '../../components';
import routes from '../../utils/routes';
import { useInfiniteQuery } from 'react-query';
import { request } from '../../utils';
import { EventsListLoader } from '../../components/Loader';
import { useInView } from 'react-intersection-observer';
import { EVENTS_FETCHED_PER_PAGE } from '../../utils/constants';

const Home = () => {
  const { ref, inView } = useInView();
  const [totalEvents, setTotalEvents] = useState(0);

  const getEvents = async page => {
    const response = await request.get(`/events?page=${page}&perPage=${EVENTS_FETCHED_PER_PAGE}`);
    const events = response.data;
    const totalCount = response.headers.get('X-Total-Count');
    setTotalEvents(totalCount);
    return events;
  };

  const {
    fetchNextPage,
    hasNextPage,
    data: events,
    isLoading,
    isError,
  } = useInfiniteQuery('events', ({ pageParam = 1 }) => getEvents(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length * EVENTS_FETCHED_PER_PAGE > totalEvents) {
        return false;
      }
      return allPages.length + 1;
    },
  });

  useEffect(() => {
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  if (isError)
    return (
      <div className="text-red-500 text-xl flex justify-center items-center h-screen w-full text-center">
        Something went wrong &#128533; <br /> try again later.
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full bg-fixed">
        <EventsListLoader viewBox={`0 0 ${window.screen.width} ${window.screen.height}`} />
      </div>
    );

  return (
    <Layout>
      <div className="gap-5 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {events?.pages.map(page => {
          return page.map(event => (
            <Link key={event._id} to={routes.event(event._id)}>
              <Card event={event} />
            </Link>
          ));
        })}
      </div>
      <div ref={ref} className="text-gray-500 uppercase pt-2 w-full text-center text-xl">
        {hasNextPage ? 'Loading more...' : ''}
      </div>
    </Layout>
  );
};

export default Home;
