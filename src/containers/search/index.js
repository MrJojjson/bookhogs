import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../../components/search';

import GenericLinearGradient from '../../components/genericElements/genericLinearGradient';

const SearchContainer = () => {
  return (
    <GenericLinearGradient>
      <Search />
    </GenericLinearGradient>
  );
}

SearchContainer.propTypes = {
}

const mapStateToProps = (state) => state.store;

export default connect(mapStateToProps)(SearchContainer);
