import { StyleSheet } from 'react-native';

import {
  PRIMARY_BACKGROUND_COLOR_ALPHA,
  BUTTON_BORDER_COLOR,
  BUTTON_BORDER_RADIUS,
  SCREEN_WIDTH,
  ORIGINIAL_MARGIN,
  ORIGINIAL_PADDING,
} from '../common';

const styles = StyleSheet.create({
  defaultDropdown: {
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: PRIMARY_BACKGROUND_COLOR_ALPHA(0.1),
    borderColor: BUTTON_BORDER_COLOR,
    borderRadius: BUTTON_BORDER_RADIUS,
    width: SCREEN_WIDTH * 0.9,
    maxHeight: 185,
    minHeight: 185,
    margin: ORIGINIAL_MARGIN / 2
  },
  defaultDropdownTitle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: ORIGINIAL_PADDING,
    backgroundColor: PRIMARY_BACKGROUND_COLOR_ALPHA(0.1),
  },
  defaultDropdownOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: ORIGINIAL_PADDING / 3,
    paddingBottom: ORIGINIAL_PADDING / 3,
    backgroundColor: PRIMARY_BACKGROUND_COLOR_ALPHA(0.3),
  },
  defaultDropdownTextView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    zIndex: 1000,
    paddingLeft: ORIGINIAL_PADDING,
  },
  defaultDropdownShowColorView: {
    flex: 1,
    height: 35,
    overflow: 'hidden',
  },
  disabledDropdown: {
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
  fill: {
    width: SCREEN_WIDTH,
  },
})

export default styles;