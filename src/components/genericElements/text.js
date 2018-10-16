import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from 'react-native';

import styles from '../../styles/genericElements/text';

const GenericText = ({ size, title }) => {
  return (
      <Text
        style={[
          styles.defaultText,
          styles[size]
        ]}
      >
        {title || 'Missed some important text!'}
      </Text>
  )
}

GenericText.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default GenericText;
