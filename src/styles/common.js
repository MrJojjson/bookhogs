import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const DEFAULT_FONT_SIZE = 12;
export const FONT_DARK_COLOR = '#44435d';
export const FONT_LIGHT_COLOR = '#FFFFFF';
export const FONT_FAMILY = 'Merriweather';

export const SMALL_ICON_SIZE = 16;

export const INPUT_BORDER_COLOR = '#aaa';
export const TAB_NAVIGATION_COLOR = 'rgba(76, 134, 200, 1)'
export const TOP_BACKGROUND_COLOR = '#2C3E50';
export const BOTTOM_BACKGROUND_COLOR = '#4CA1AF';
export const MAIN_BACKGROUND_COLOR_ALPHA = alpha => `rgba(255, 255, 255, ${alpha || 0})`;
export const SECONDARY_BACKGROUND_COLOR = '#ddd';
export const DISABLED_COLOR = '#efeff4';

export const SCREEN_PADDING = 16;
export const MULTIPLIER = 0.85;

export const BUTTON_PADDING = 5;
export const BUTTON_BORDER_COLOR = '#FFFFFF';
export const BUTTON_BORDER_RADIUS = 2.5;

export const CONTAINER = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  marginTop: 0,
  minHeight: SCREEN_HEIGHT,
};

