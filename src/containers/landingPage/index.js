import React from 'react';
// import PropTypes from 'prop-types';
import {
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import LandingPage from '../../components/landingPage';

const LandingPageContainer = () => {
  return (
    <ScrollView>
      <LandingPage />
    </ScrollView>
  );
}

LandingPageContainer.propTypes = {
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(LandingPageContainer);
