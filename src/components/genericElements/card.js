import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
} from 'react-native';

import styles from '../../styles/genericElements/card';

import GenericText from './text';

const imageSrc = require('../../assets/img/cover1.jpg');

const GenericCard = ({ size, disabled, onCardPress }) => {
  return (
    <View
      style={[
        styles.defaultCard,
        size && styles[size],
        disabled ? styles.disabledCard : ''
      ]}
    >
      <View style={styles.cardImageView}>
        <Image
          style={styles.cardImage}
          source={imageSrc}
        />
      </View>
      <View style={styles.cardTextView}>
        <GenericText title="An attempt to produce text" />
        <GenericText title="And another line of text" />
        <GenericText title="We need some image as well" />
      </View>      
    </View>
  )
}

GenericCard.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onCardPress: PropTypes.func,
}

export default GenericCard;
