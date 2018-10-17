import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles/genericElements/button';

const GenericButton = ({ size, disabled, title, onButtonPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onButtonPress()}
      disabled
      style={[
        styles.defaultButton,
        size && styles[size],
        disabled ? styles.disabledButton : ''
      ]}
      >
      <Text numberOfLines={1} style={styles.defaultButtonText}>
        {title || 'Missed some important title!'}
      </Text>
    </TouchableOpacity>
  )
}

GenericButton.propTypes = {
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func,
}

export default GenericButton;
