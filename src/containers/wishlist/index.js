import React from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Wishlist from '../../components/wishlist';

import GenericLinearGradient from '../../components/genericElements/genericLinearGradient';

const WishlistContainer = () => {
  return (
    <GenericLinearGradient>
      <Wishlist />
    </GenericLinearGradient>
  );
}

WishlistContainer.propTypes = {
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(WishlistContainer);
