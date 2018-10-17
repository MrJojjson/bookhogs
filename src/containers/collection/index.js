import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Collection from '../../components/collection';

import GenericLinearGradient from '../../components/genericElements/genericLinearGradient';

const CollectionContainer = () => {
  return (
    <GenericLinearGradient>
      <Collection />
    </GenericLinearGradient>
  );
}

CollectionContainer.propTypes = {
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(CollectionContainer);
