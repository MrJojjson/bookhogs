import React from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Profile from '../../components/profile';

import GenericLinearGradient from '../../components/genericElements/genericLinearGradient';

const ProfileContainer = () => {
  return (
    <GenericLinearGradient>
      <Profile />
    </GenericLinearGradient>
  );
}

ProfileContainer.propTypes = {
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(ProfileContainer);
