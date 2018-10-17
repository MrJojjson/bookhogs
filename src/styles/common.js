import { Dimensions, Platform } from 'react-native';

export const iPhoneX = () => Platform.OS === 'ios' && (SCREEN_HEIGHT === 812 || SCREEN_WIDTH === 812)

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

export const ORIGINIAL_MARGIN = 10;
export const ORIGINIAL_PADDING = 10;
export const MULTIPLIER = 0.85;

export const BUTTON_PADDING = 5;
export const BUTTON_BORDER_COLOR = '#FFFFFF';
export const BUTTON_BORDER_RADIUS = 2.5;

export const NAV_HEIGHT = 44;
export const SCROLL_VIEW_MARGIN_TO_NAV = NAV_HEIGHT * 1.85 + (iPhoneX() ? 7 : 0);

export const CONTAINER = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: SCREEN_HEIGHT,
  minWidth: SCREEN_WIDTH,
  paddingTop: iPhoneX() ? 20 : 0
};

export const SCROLL_VIEW_CONTAINER = {
  flex: 1,
}


