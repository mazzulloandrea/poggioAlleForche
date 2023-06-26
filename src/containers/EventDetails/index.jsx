import React from 'react';
import _, { get as _get } from 'lodash';
import { useTranslation } from 'react-i18next';
import Layout from '../../layouts/Layout';
import {
  DateContainer,
  ImageContainer,
  Title,
  InformationContainer,
  Location,
  LocationAndTimeContainer,
  Time,
  About,
  Label,
  Description,
  Button,
} from './styles';
import cardBgPlaceholder from '../../assets/event-card-bg-placeholder.png';
import { useParams } from 'react-router-dom';
import { getDate } from '../../utils/utils';
import { EventDetailsLoader } from '../../components/Loader';
import { useQuery } from 'react-query';
import { request } from '../../utils';

const EventDetails = () => {
  const { id: eventId } = useParams();
  const { t } = useTranslation();

  const getEventDetails = async ({ queryKey }) => {
    const { data } = await request.get(`/events/${queryKey[1]}`);
    return data;
  };

  const { isLoading, data: event } = useQuery(['eventDetails', eventId], getEventDetails, {
    enabled: !!eventId,
  });

  const description = _get(event, 'description', '');
  const title = _get(event, 'title', '');
  const dateFrom = _get(event, 'dateFrom', '');
  const dateTo = _get(event, 'dateTo', '');
  const location = _get(event, 'location', '');
  const image = _get(event, 'images[0].url', cardBgPlaceholder);
  const timeStart = new Date(dateFrom).toLocaleString(_, { timeStyle: 'short' });
  const timeEnd = new Date(dateTo).toLocaleString(_, { timeStyle: 'short' });

  if (!event && (isLoading || !id)) {
    return (
      <div className="w-full">
        <EventDetailsLoader viewBox={`0 0 ${window.screen.width} ${window.screen.height}`} />
      </div>
    );
  }

  return (
    <Layout>
      <ImageContainer style={{ backgroundImage: `url(${image})` }}>
        <DateContainer>
          {getDate(dateFrom)
            .split(' ')
            .map(datePart => (
              <div key={datePart}>{datePart}</div>
            ))}
        </DateContainer>
        <Title>{title}</Title>
      </ImageContainer>
      <InformationContainer>
        <LocationAndTimeContainer>
          <Location>{location}</Location>
          <Time>
            {timeStart} - {timeEnd}
          </Time>
        </LocationAndTimeContainer>
        <Button
          className="bg-xorange w-full font-semibold py-3 uppercase text-xwhite text-xl my-6"
          onClick={() => console.log('TODO')}
        >
          {t('containers.eventDetails.participate')}
        </Button>
        <About>
          <Label> {t('containers.eventDetails.about')}</Label>
          <Description>{description}</Description>
        </About>
      </InformationContainer>
    </Layout>
  );
};

export default EventDetails;
