import { StyleSheet } from 'react-native';

import {
  ORIGINIAL_MARGIN,
} from '../common';

const styles = StyleSheet.create({
  defaultCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: ORIGINIAL_MARGIN,
  },
  disabledCheckbox: {
    opacity: 0.35,
  },
  checkboxIcon: {
    marginRight: ORIGINIAL_MARGIN * 0.5,
  },
})

export default styles;