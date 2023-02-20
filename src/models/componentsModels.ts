interface ICallbackResponse {
  token_type: string;
  access_token: string;
}

enum CalendarMessages {
  signInMessage = 'To access google calendar events, click "Sign In"',
  signOutMessage = 'To hide google calendar events, click "Sign Out"',
  noEventsMessage = 'You don`t have any events yet',
}

enum GoogleButton {
  signIn = 'Sign In',
  signOut = 'Sign Out',
}

enum ImagesTitles {
  sun = 'sun.jpg',
  clouds = 'clouds.jpg',
  rain = 'rain.jpg',
  rainWithSun = 'rainWithSun.jpg',
  snow = 'snow.jpg',
  snowWithSun = 'snowWithSun.jpg',
  thunderstorm = 'thunderstorm.jpg',
  default = 'default.jpg',
}

enum BackgroundColors {
  cloudly = '#00000066',
  sunny = '#00000033',
  rainy = '#00000080',
  default = 'transparent',
}

export { CalendarMessages, GoogleButton, ImagesTitles, BackgroundColors };
export type { ICallbackResponse };
