import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { useTranslation } from 'react-i18next';
import cardBgPlaceholder from '../../assets/event-card-bg-placeholder.png';
import { useGoogleCalendar } from '../../hooks';
import {
  CardContainer,
  DateContainer,
  BottomContainer,
  GoogleButtonContainer,
  TitleContainer,
  LocationContainer,
} from './styles';
import { BsFillCalendarPlusFill } from 'react-icons/bs';
import { get as _get } from 'lodash';

const Card = ({ event: { dateFrom, dateTo, title, location, images } }) => {
  const { t } = useTranslation();
  const getDate = () => {
    return new Date(dateFrom).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };
  const image = _get(images, '[0].url', cardBgPlaceholder);
  const googleCalendar = useGoogleCalendar();

  const addEventToCalendar = async () => {
    const event = {
      summary: title,
      description: title,
      location: location,
      start: dateFrom,
      end: dateTo || dateFrom,
    };
    await googleCalendar.addEvent(event);
  };

  return (
    <CardContainer style={{ backgroundImage: `url(${image})` }}>
      <DateContainer>
        {getDate()
          .split(' ')
          .map(datePart => (
            <div key={datePart}>{datePart}</div>
          ))}
      </DateContainer>
      <GoogleButtonContainer className="">
        <button onClick={addEventToCalendar}>
          <BsFillCalendarPlusFill size={20} />
        </button>
      </GoogleButtonContainer>
      <BottomContainer>
        <TitleContainer>{title}</TitleContainer>
        <LocationContainer>
          <SlLocationPin className="mr-2 w-4" />
          <span>{location}</span>
        </LocationContainer>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;
