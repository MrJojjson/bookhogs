import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   View,
// } from 'react-native';

import { AnimationFade } from '../../utilities/animations';

import GenericButton from '../genericElements/button';
import GenericText from '../genericElements/text';
// import GenericCarousel from '../genericElements/carousel';

import {
  CONTAINER,
} from '../../styles/common';

// import styles from '../../styles/landingPage';

const Profile = () => {
  return (
    <AnimationFade fadeDirection="fadeInLeft" style={CONTAINER}>
      <GenericText title="Profile" size="small"/>
      <GenericButton size="small" title="To collection" />
    </AnimationFade> 
  );
}

Profile.propTypes = {
}

export default Profile;
