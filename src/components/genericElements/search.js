import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  FONT_LIGHT_COLOR,
  SMALL_ICON_SIZE,
} from '../../styles/common';

import styles from '../../styles/genericElements/search';

const onRemoveInputValue = () => {
  alert('remove value');
}

const onSearch = () => {
  alert('search');
}

const GenericSearch = ({ size, disabled, stringID }) => {
  return (
    <View style={styles.searchInputView}>
      <Icon style={styles.searchInputIconRemove} name="times" size={SMALL_ICON_SIZE} color={FONT_LIGHT_COLOR} onPress={() => onRemoveInputValue()} />
      <TextInput
        id={stringID}
        disabled
        style={[
          styles.defaultSearchInput,
          styles[size],
          disabled ? styles.disabledSearchInput : ''
        ]}
        />
      <Icon style={styles.searchInputIconSearch} name="search" size={SMALL_ICON_SIZE} color={FONT_LIGHT_COLOR} onPress={() => onSearch()} />
    </View>
    
  )
}

GenericSearch.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  stringID: PropTypes.string.isRequired,
  onSearchButtonPress: PropTypes.func,
}

export default GenericSearch;
