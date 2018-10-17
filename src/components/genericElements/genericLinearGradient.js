import React from 'react';
import PropTypes from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';

import {
  CONTAINER,
  TOP_BACKGROUND_COLOR,
  BOTTOM_BACKGROUND_COLOR,
} from '../../styles/common';

const GenericLinearGradient = ({ children }) => {
  return (
    <LinearGradient
      start={{x: 0.5, y: 0.0}} end={{x: 0.3, y: 1.0}}
      colors={[TOP_BACKGROUND_COLOR, BOTTOM_BACKGROUND_COLOR]}
      style={CONTAINER}
    >
      {children}
    </LinearGradient>
  );
}

GenericLinearGradient.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default GenericLinearGradient;
