import { StyleSheet } from 'react-native';

import {
  FONT_LIGHT_COLOR,
  PRIMARY_BACKGROUND_COLOR_ALPHA,
  BUTTON_BORDER_COLOR,
  BUTTON_BORDER_RADIUS,
  SCREEN_WIDTH,
  DEFAULT_FONT_SIZE,
  ORIGINIAL_PADDING
} from '../common';

const styles = StyleSheet.create({
  defaultButton: {
    borderWidth:1,
    padding:ORIGINIAL_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_BACKGROUND_COLOR_ALPHA(0.1),
    borderColor: BUTTON_BORDER_COLOR,
    borderRadius: BUTTON_BORDER_RADIUS,
    width: SCREEN_WIDTH * 0.35,
  },
  defaultButtonText: {
    fontSize: DEFAULT_FONT_SIZE,
    color: FONT_LIGHT_COLOR,
  },
  disabledButton: {
    opacity: 0.35,
  },
  small: {
    width: SCREEN_WIDTH * 0.35,
  },
  medium: {
    width: SCREEN_WIDTH * 0.55,
  },
  large: {
    width: SCREEN_WIDTH * 0.65,
  },
})

export default styles;