import React from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/loading';

import GenericLinearGradient from '../../components/genericElements/genericLinearGradient';

const LoadingContainer = () => {
  return (
    <GenericLinearGradient horizontal>
      <Loading />
    </GenericLinearGradient>
  );
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(LoadingContainer);
