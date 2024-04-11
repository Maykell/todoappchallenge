type ProductColors = {
  blue: string;
  blueDark: string;
  purple: string;
  purpleDark: string;
};

type BaseColors = {
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  transparent: string;
};

type FeedbackColors = {
  danger: string;
};

export type Colors = ProductColors & BaseColors & FeedbackColors;

const product: ProductColors = {
  blue: '#4EA8DE',
  blueDark: '#1E6F9F',
  purple: '#8284FA',
  purpleDark: '#5E60CE',
};

const base: BaseColors = {
  gray100: '#F2F2F2',
  gray200: '#D9D9D9',
  gray300: '#808080',
  gray400: '#333333',
  gray500: '#262626',
  gray600: '#1A1A1A',
  gray700: '#0D0D0D',
  transparent: 'transparent',
};

const feedback: FeedbackColors = {
  danger: '#E25858',
};

export const colors: Colors = {
  ...product,
  ...base,
  ...feedback,
};
