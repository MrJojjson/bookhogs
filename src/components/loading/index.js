import React from 'react';

import {
  BarIndicator,
} from 'react-native-indicators';

import { AnimationFade } from '../../utilities/animations';

import {
  CONTAINER,
  FONT_LIGHT_COLOR
} from '../../styles/common';

const Loading = () => {
  return (
    <AnimationFade fadeDirection="fadeIn" style={CONTAINER}>
      <BarIndicator color={FONT_LIGHT_COLOR} />
    </AnimationFade> 
  );
}

Loading.propTypes = {
}

export default Loading;
