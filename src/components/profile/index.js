import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   View,
// } from 'react-native';

import { AnimationFade } from '../../utilities/animations';

import GenericDropdown from '../genericElements/dropdown';
import GenericButton from '../genericElements/button';
import GenericText from '../genericElements/text';
// import GenericCarousel from '../genericElements/carousel';

import {
  CONTAINER,
} from '../../styles/common';

// import styles from '../../styles/landingPage';

const mockOptions = [
  {
    id: 'asdAdqql123lasd213',
    title: '#fad859 #fff68f',
    primaryColor: '#fad859',
    secondaryColor: '#fff68f',
  },
  {
    id: 'zcdawq321e41341',
    title: '#5c97bf #22313f',
    primaryColor: '#5c97bf',
    secondaryColor: '#22313f',
  },
  {
    id: 'fsdfsdf134sg',
    title: '#24252a #1e8bc3',
    primaryColor: '#24252a',
    secondaryColor: '#1e8bc3',
  },
  {
    id: 'gerh3234324',
    title: '#049372 #3fc380',
    primaryColor: '#049372',
    secondaryColor: '#3fc380',
  },
  {
    id: 'zxczxczxc',
    title: '#f2784b #eb9532',
    primaryColor: '#f2784b',
    secondaryColor: '#eb9532',
  },
  {
    id: 'asddw',
    title: 'Grey red',
    primaryColor: 'grey',
    secondaryColor: 'red',
  },
  {
    id: '13',
    title: 'Yellow purple',
    primaryColor: 'yellow',
    secondaryColor: 'purple',
  },
  {
    id: 'gerh3234asddad324',
    title: 'pink yellow',
    primaryColor: 'pink',
    secondaryColor: 'yellow',
  }
]

const Profile = () => {
  return (
    <AnimationFade fadeDirection="fadeIn" style={CONTAINER}>
      <GenericText title="Profile" size="small"/>
      <GenericButton size="small" title="To collection" />
      <GenericDropdown size="large" options={mockOptions} title="Test" showColor/>
    </AnimationFade> 
  );
}

Profile.propTypes = {
}

export default Profile;
