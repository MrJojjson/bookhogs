import { StyleSheet } from 'react-native';

import {
  FONT_LIGHT_COLOR,
  PRIMARY_BACKGROUND_COLOR_ALPHA,
  BUTTON_BORDER_COLOR,
  BUTTON_BORDER_RADIUS,
  SCREEN_WIDTH,
  DEFAULT_FONT_SIZE,
  ORIGINIAL_MARGIN,
  ORIGINIAL_PADDING
} from '../common';

const styles = StyleSheet.create({
  searchInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputIconSearch: {
    marginLeft: ORIGINIAL_MARGIN * 1.5,
  },
  searchInputIconRemove: {
    position: 'absolute',
    right: 40,
  },
  defaultSearchInput: {
    borderWidth:1,
    paddingTop: ORIGINIAL_PADDING,
    paddingRight: ORIGINIAL_PADDING * 3,
    paddingBottom: ORIGINIAL_PADDING,
    paddingLeft: ORIGINIAL_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_BACKGROUND_COLOR_ALPHA(0.1),
    borderColor: BUTTON_BORDER_COLOR,
    borderRadius: BUTTON_BORDER_RADIUS,
    width: SCREEN_WIDTH * 0.5,
    fontSize: DEFAULT_FONT_SIZE,
    color: FONT_LIGHT_COLOR,
  },
  disabledSearchInput: {
    opacity: 0.35,
  },
  small: {
    width: SCREEN_WIDTH * 0.5,
  },
  medium: {
    width: SCREEN_WIDTH * 0.65,
  },
  large: {
    width: SCREEN_WIDTH * 0.8,
  },
})

export default styles;