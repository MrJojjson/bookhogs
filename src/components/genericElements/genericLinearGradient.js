import React from 'react';
import PropTypes from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';

import {
  CONTAINER,
  PRIMARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from '../../styles/common';

const GenericLinearGradient = ({ children, horizontal, primary, secondary }) => {
  return (
    <LinearGradient
      start={horizontal ? {x: 0, y: 0}: {x: 0.5, y: 0.0}}
      end={horizontal ? {x: 1, y: 0} : {x: 0.3, y: 1}}
      colors={[(primary || PRIMARY_BACKGROUND_COLOR), (secondary || SECONDARY_BACKGROUND_COLOR)]}
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
  horizontal: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.string,
}

export default GenericLinearGradient;
