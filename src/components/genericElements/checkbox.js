import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  FONT_LIGHT_COLOR,
  SMALL_ICON_SIZE,
} from '../../styles/common';

import styles from '../../styles/genericElements/checkbox';

import GenericText from './text';

const GenericCheckbox = ({ size, title, disabled, checked, onCheckboxPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onCheckboxPress()}
      disabled
      style={[
        styles.defaultCheckbox,
        disabled ? styles.disabledCheckbox : ''
      ]}
      >
      <Icon style={styles.checkboxIcon} name={checked ? "check-square" : "square" } size={size || SMALL_ICON_SIZE} color={FONT_LIGHT_COLOR} />
      {title ? <GenericText title={title} /> : null}
    </TouchableOpacity>
  )
}

GenericCheckbox.propTypes = {
  size: PropTypes.number,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckboxPress: PropTypes.func,
}

export default GenericCheckbox;
