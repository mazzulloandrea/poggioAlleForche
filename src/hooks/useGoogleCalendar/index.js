import ApiCalendar from 'react-google-calendar-api';
import { googleCalendar } from '../../configs'; // TODO: get config on BE

// exemple Event {
//   summary: event.title,
//   description: 'Nuovo Evento Creato',
//   start: {
//     dateTime: '2022-11-06T09:00:00-07:00',
//     timeZone: 'Europe/Rome',
//   },
//   end: {
//     dateTime: '2022-11-06T09:00:00-08:00',
//     timeZone: 'Europe/Rome',
//   },
// }

const calendar = new ApiCalendar(googleCalendar);

const useGoogleCalendar = () => {
  const addEvent = async ({ summary, description, start, end }) => {
    const event = {
      summary,
      description,
      start: {
        dateTime: new Date(start).toISOString(),
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: new Date(end).toISOString(),
        timeZone: 'Europe/Rome',
      },
    };

    calendar.handleAuthClick();
    await calendar.createEvent(event);
  };

  return { addEvent };
};

export default useGoogleCalendar;
