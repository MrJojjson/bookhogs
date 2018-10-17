import { StyleSheet } from 'react-native';

import {
  SCREEN_WIDTH,
  ORIGINIAL_PADDING,
} from './common';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  welcomeTextView:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center',
    width: SCREEN_WIDTH,
    backgroundColor: 'transparent'
  },
  carouselOuterView:{
    flex:0.4,
    flexDirection:'column',
    width: SCREEN_WIDTH,
    backgroundColor: 'transparent'
  },
  carouselHeaderView:{
    flex:0.15,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    width: SCREEN_WIDTH,
  },
  carouselView:{
    flex:0.75,
    justifyContent:'center',
    alignItems:'center',
    paddingTop: ORIGINIAL_PADDING * 1.5
  },
});

export default styles;