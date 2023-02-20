import Calendar from 'react-google-calendar-api';
import { CALENDAR_URL } from '../constants/baseUrl';
import { ICalendarResponse } from '../models/api';
import { getISODayRange } from '../helpers/date';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const calendarConfig = {
  clientId: CLIENT_ID as string,
  apiKey: API_KEY as string,
  scope: `${CALENDAR_URL}auth/calendar`,
  discoveryDocs: [`${CALENDAR_URL}discovery/v1/apis/calendar/v3/rest`],
};

const apiCalendar = new Calendar(calendarConfig);

const fetchCalendar = async (token: string, day: Date): Promise<ICalendarResponse> => {
  const [start, end] = getISODayRange(day);

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
