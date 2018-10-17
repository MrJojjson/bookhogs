import { StyleSheet } from 'react-native';

import {
  INPUT_BORDER_COLOR,
  ORIGINIAL_MARGIN,
  ORIGINIAL_PADDING,
  MAIN_BACKGROUND_COLOR_ALPHA
} from './common';

const styles = StyleSheet.create({
  searchAndFilterContainer: {
    flex:0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: INPUT_BORDER_COLOR,
  },
  searchContainer: {
    width: '100%',
    flex:0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    marginRight: ORIGINIAL_PADDING,
    flex:0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resultContainer: {
    marginTop: ORIGINIAL_MARGIN,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default styles;
