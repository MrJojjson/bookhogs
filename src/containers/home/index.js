import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from '../../components/home';

import GenericLinearGradient from '../../components/genericElements/genericLinearGradient';

const HomeContainer = () => {
  return (
    <GenericLinearGradient>
      <Home />
    </GenericLinearGradient>
  );
}

HomeContainer.propTypes = {
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(HomeContainer);
