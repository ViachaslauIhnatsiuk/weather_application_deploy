interface ModalButtonProps {
  value: string;
  handler: () => void;
}

interface WeatherIconProps {
  code: number;
  size: number;
}

interface AirQualityItemProps {
  title: string;
  value: number;
}

interface ForecastInfoItemProps {
  value: number;
  title: string;
  width: number;
}

interface DatePickerItemProps {
  label: string;
  date: string;
  setDate: (value: string) => void;
}

export type {
  ModalButtonProps,
  WeatherIconProps,
  AirQualityItemProps,
  ForecastInfoItemProps,
  DatePickerItemProps,
};
