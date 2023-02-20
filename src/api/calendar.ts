import Calendar from 'react-google-calendar-api';
import { CALENDAR_URL } from '../constants/baseUrl';
import { ICalendarResponse } from '../models/api';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const calendarConfig = {
  clientId: CLIENT_ID as string,
  apiKey: API_KEY as string,
  scope: `${CALENDAR_URL}auth/calendar`,
  discoveryDocs: [`${CALENDAR_URL}discovery/v1/apis/calendar/v3/rest`],
};

const apiCalendar = new Calendar(calendarConfig);

const fetchCalendar = async (
  token: string,
  start: string,
  end: string,
): Promise<ICalendarResponse> => {
  const response = await fetch(
    `${CALENDAR_URL}calendar/v3/calendars/primary/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${start}&timeMax=${end}`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  const result = await response.json();
  return result;
};

export { fetchCalendar, apiCalendar };
