import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
import { Layout } from '../../layouts';
// import { Card } from '../../components';
// import routes from '../../utils/routes';
// import { useInfiniteQuery } from 'react-query';
// import { request } from '../../utils';
// import { EventsListLoader } from '../../components/Loader';
// import { useInView } from 'react-intersection-observer';
// import { EVENTS_FETCHED_PER_PAGE } from '../../utils/constants';
import { Gallery } from '../../components';
import { MainContainer, Wrapper, CopertinaBck, Logo, Marchio, Dicitura, Arrow } from './styles';
import LogoImg from '../../assets/header/logo.png';
import MarchioImg from '../../assets/header/marchio.png';
import DicituraImg from '../../assets/header/dicitura.png';
import ArrowImg from '../../assets/header/arrowDown.png';

const Copertina = () => {
  // const { ref, inView } = useInView();
  // const [totalEvents, setTotalEvents] = useState(0);
  const [step, setStep] = useState(0);
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false);

  // step 0
  // parte con cover -> animazione dei vari componenti che appaiono

  // step 1
  // una volta che i componenti appaiono è possibile cliccare

  // step 2
  // clikkando si alza la copertina ed appare il sito

  // step 3
  // la copertina sparisce per sempre ed il sito diviene scrollabile

  const getStyle = () => {
    if (step === 4) {
      return {
        overflow: 'auto',
        height: 'auto',
      };
    }
    return {
      overflow: 'hidden',
      height: '100vh',
    };
  };

  const leaveCopertina = useCallback(() => {
    if (step < 3 || step === 5) return;
    setStep(4);
  }, [step]);

  useEffect(() => {}, [step]);

  return (
    <MainContainer
      style={{ ...getStyle() }}
      onClick={() => leaveCopertina()}
      moveUp={step === 4}
      onAnimationEnd={evt => {
        if (step === 5) return false;
        setStep(5);
        setIsVisibleMobileMenu(true);
      }}
    >
      <CopertinaBck isVisible={step === 5}>
        <Wrapper>
          <Logo
            in={step === 0}
            onAnimationEnd={evt => {
              if (step > 0) return false;
              setStep(1);
              evt.stopPropagation();
            }}
            src={LogoImg}
          />
          <Marchio
            in={step > 0}
            src={MarchioImg}
            onAnimationEnd={evt => {
              if (step > 1) return false;
              setStep(2);
              evt.stopPropagation();
            }}
          />
          <Dicitura
            in={step > 1}
            src={DicituraImg}
            onAnimationEnd={evt => {
              if (step > 2) return false;
              setStep(3);
              evt.stopPropagation();
            }}
          />
          <Arrow in={step > 2} src={ArrowImg} />
        </Wrapper>
      </CopertinaBck>
      <Layout isVisibleMobileMenu={isVisibleMobileMenu}>
        <Gallery />
      </Layout>
    </MainContainer>
  );

  {
    /* <div className="gap-5 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {events?.pages.map(page => {
          return page.map(event => (
            <Link key={event._id} to={routes.event(event._id)}>
            <Card event={event} />
            </Link>
            ));
          })}
        </div> */
  }
  {
    /* <div ref={ref} className="text-gray-500 uppercase pt-2 w-full text-center text-xl">
        {hasNextPage ? 'Loading more...' : ''}
      </div> */
  }

  // const getEvents = async page => {
  //   const response = await request.get(`/events?page=${page}&perPage=${EVENTS_FETCHED_PER_PAGE}`);
  //   const events = response.data;
  //   const totalCount = response.headers.get('X-Total-Count');
  //   setTotalEvents(totalCount);
  //   return events;
  // };

  // const {
  //   fetchNextPage,
  //   hasNextPage,
  //   data: events,
  //   isLoading,
  //   isError,
  // } = useInfiniteQuery('events', ({ pageParam = 1 }) => getEvents(pageParam), {
  //   getNextPageParam: (lastPage, allPages) => {
  //     if (allPages.length * EVENTS_FETCHED_PER_PAGE > totalEvents) {
  //       return false;
  //     }
  //     return allPages.length + 1;
  //   },
  // });

  // useEffect(() => {
  //   inView && hasNextPage && fetchNextPage();
  // }, [inView]);

  // if (isError)
  //   return (
  //     <div className="text-red-500 text-xl flex justify-center items-center h-screen w-full text-center">
  //       Something went wrong &#128533; <br /> try again later.
  //     </div>
  //   );

  // if (isLoading)
  //   return (
  //     <div className="w-full bg-fixed">
  //       <EventsListLoader viewBox={`0 0 ${window.screen.width} ${window.screen.height}`} />
  //     </div>
  //   );
};

export default Copertina;
