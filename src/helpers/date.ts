const currentTime = new Intl.DateTimeFormat('en', {
  hour: 'numeric',
  minute: 'numeric',
});

const currentWeekday = new Intl.DateTimeFormat('en', { weekday: 'long' });

const currentDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const unixWeekday = { weekday: 'short' };

const unixDate = { day: 'numeric', month: 'long' };

const calendarTime = { hour: '2-digit', minute: '2-digit' };

const calendarDate = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

const getDate = (formatter: Intl.DateTimeFormat, newDate?: number): string => {
  const date = newDate || Date.now();

  return formatter.format(date);
};

const convertDate = (unixTime: number, options: { [key: string]: string }): string => {
  const date = new Date(unixTime * 1000);

  return date.toLocaleString('en-US', options);
};

const convertCalendarTime = (
  time: string,
  options: { [key: string]: string },
): string => {
  const date = new Date(time);

  return date.toLocaleString('en-GB', options);
};

const getISODayStart = (day: number | string = Date.now()): string => {
  const start = new Date(day);
  start.setUTCHours(0, 0, 0, 0);

  return start.toISOString();
};

const getISODayEnd = (day: number | string = Date.now()): string => {
  const end = new Date(day);
  end.setUTCHours(23, 59, 59, 999);

  return end.toISOString();
};

export {
  getDate,
  convertDate,
  convertCalendarTime,
  getISODayStart,
  getISODayEnd,
  currentTime,
  currentWeekday,
  currentDate,
  unixWeekday,
  unixDate,
  calendarTime,
  calendarDate,
};
