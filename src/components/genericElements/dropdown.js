import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import {
  SCROLL_VIEW_CONTAINER
} from '../../styles/common';
import styles from '../../styles/genericElements/dropdown';

import GenericText from './text';
import GenericLinearGradient from './genericLinearGradient';

const RenderColor = (primaryColor, secondaryColor) => (
  <View
    style={[
      styles.defaultDropdownShowColorView,
    ]}
  >
    <GenericLinearGradient horizontal primary={primaryColor} secondary={secondaryColor}/>
  </View>
)

const RenderTitle = (title, onTitlePress) => {
  return (
    <TouchableOpacity
      onPress={() => onTitlePress()}
      disabled
      style={[
        styles.defaultDropdownTitle,
      ]}
      >
        <GenericText title={title} />
    </TouchableOpacity>
  )
};

const RenderOptions = (options, onOptionsPress, showColor) => options.map((o, i) => {
  return (
    <TouchableOpacity
      key={o.id}
      onPress={() => onOptionsPress(i)}
      disabled
      style={[
        styles.defaultDropdownOption,
      ]}
      >
        <View style={styles.defaultDropdownTextView}>
          <GenericText title={o.title} />
        </View>
        {showColor
          ? RenderColor(o.primaryColor, o.secondaryColor)
          : null
        }
       
    </TouchableOpacity>
  )
});

const GenericDropdown = ({ size, disabled, title, onOptionsPress, onTitlePress, options, showColor }) => {
  return (
    <View
      style={[
        styles.defaultDropdown,
        size && styles[size],
        disabled ? styles.disabledDropdown : ''
      ]}
    >
      {RenderTitle(title, onTitlePress)}
      <ScrollView style={[SCROLL_VIEW_CONTAINER, { width: '100%' }]}>
        {RenderOptions(options, onOptionsPress, showColor)}
      </ScrollView>
    </View>
  )
}

GenericDropdown.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  showColor: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onOptionsPress: PropTypes.func,
  onTitlePress: PropTypes.func,
  options: PropTypes.array.isRequired,
}

export default GenericDropdown;
