import { StyleSheet } from 'react-native';

import {
  MAIN_BACKGROUND_COLOR_ALPHA,
  BUTTON_BORDER_COLOR,
  BUTTON_BORDER_RADIUS,
  SCREEN_WIDTH,
  ORIGINIAL_MARGIN,
  ORIGINIAL_PADDING,
} from '../common';

const styles = StyleSheet.create({
  defaultCard: {
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: MAIN_BACKGROUND_COLOR_ALPHA(0.1),
    borderColor: BUTTON_BORDER_COLOR,
    borderRadius: BUTTON_BORDER_RADIUS,
    width: SCREEN_WIDTH * 0.9,
    maxHeight: 185,
    minHeight: 185,
    padding: ORIGINIAL_PADDING,
    margin: ORIGINIAL_MARGIN / 2
  },
  cardImageView: {
    flex:0.35,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    height: '100%',
    width: '100%',
  },
  cardTextView: {
    flex:0.65,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: ORIGINIAL_MARGIN,
  },
  disabledCard: {
    opacity: 0.35,
  },
  small: {
    width: SCREEN_WIDTH * 0.49,
  },
  medium: {
    width: SCREEN_WIDTH * 0.70,
  },
  large: {
    width: SCREEN_WIDTH * 0.9,
  },
  fill: {
    width: SCREEN_WIDTH,
  },
})

export default styles;