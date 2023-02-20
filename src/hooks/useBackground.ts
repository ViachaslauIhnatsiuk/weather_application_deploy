import {
  sun,
  clouds,
  rain,
  rainWithSun,
  snow,
  snowWithSun,
  thunderstorm,
} from '../constants/backgroundChangeCodes';
import { defaultForecast } from '../constants/forecast';
import { BackgroundColors, ImagesTitles } from '../models/componentsModels';
import { selectForecast, useAppSelector } from '../store/selectors';

const useBackground = () => {
  const { forecast } = useAppSelector(selectForecast);

  const changeBackgroundImage = () => {
    const currentForecastCode = forecast?.current.condition.code || defaultForecast.code;

    switch (true) {
      case sun.includes(currentForecastCode):
        return ImagesTitles.sun;

      case clouds.includes(currentForecastCode):
        return ImagesTitles.clouds;

      case rain.includes(currentForecastCode):
        return ImagesTitles.rain;

      case rainWithSun.includes(currentForecastCode):
        return ImagesTitles.rainWithSun;

      case snow.includes(currentForecastCode):
        return ImagesTitles.snow;

      case snowWithSun.includes(currentForecastCode):
        return ImagesTitles.snowWithSun;

      case thunderstorm.includes(currentForecastCode):
        return ImagesTitles.thunderstorm;

      default:
        return ImagesTitles.default;
    }
  };

  const changeBackground = () => {
    const currentForecastCode = forecast?.current.condition.code || defaultForecast.code;

    switch (true) {
      case [...clouds, ...snow].includes(currentForecastCode):
        return BackgroundColors.cloudly;

      case [...sun, ...rainWithSun, ...snowWithSun].includes(currentForecastCode):
        return BackgroundColors.sunny;

      case [...rain, ...thunderstorm].includes(currentForecastCode):
        return BackgroundColors.rainy;

      default:
        return BackgroundColors.default;
    }
  };

  return { changeBackgroundImage, changeBackground };
};

export { useBackground };
