import { StyleSheet } from 'react-native';

import {
  FONT_LIGHT_COLOR,
  DEFAULT_FONT_SIZE
} from '../common';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: DEFAULT_FONT_SIZE,
    color: FONT_LIGHT_COLOR,
  },
  small: {
    fontSize: DEFAULT_FONT_SIZE - 2,
  },
  medium: {
    fontSize: DEFAULT_FONT_SIZE + 2,
  },
  large: {
    fontSize: DEFAULT_FONT_SIZE + 4,
  },
})

export default styles;