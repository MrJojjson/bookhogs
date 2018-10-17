import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
} from 'react-native';
import { AnimationFade } from '../../utilities/animations';

// import GenericButton from '../genericElements/button';
import GenericCard from '../genericElements/card';
import GenericText from '../genericElements/text';
import GenericCheckbox from '../genericElements/checkbox';
import GenericSearch from '../genericElements/search';
// import GenericCarousel from '../genericElements/carousel';

import {
  CONTAINER,
  SCROLL_VIEW_CONTAINER,
  SCROLL_VIEW_MARGIN_TO_NAV
} from '../../styles/common';

import styles from '../../styles/search';

// import styles from '../../styles/landingPage';

const Search = () => {
  return (
    <View style={CONTAINER}>
      <AnimationFade fadeDirection="fadeInDown" style={styles.searchAndFilterContainer}>
        <View style={styles.searchContainer}>
          <GenericSearch stringID="searchBooks" size="medium"/>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={SCROLL_VIEW_CONTAINER}>
          <View style={styles.filterContainer}>
            <GenericCheckbox title="Checkbox title"/>
            <GenericCheckbox title="Checkbox title 2"/>
            <GenericCheckbox title="Checkbox title 3"/>
            <GenericCheckbox title="Checkbox title 4"/>
            <GenericCheckbox title="Checkbox title 5"/>
          </View>
        </ScrollView>
      </AnimationFade>
      <ScrollView style={[SCROLL_VIEW_CONTAINER, { marginBottom: SCROLL_VIEW_MARGIN_TO_NAV }]}>
        <AnimationFade fadeDirection="fadeIn" style={styles.resultContainer}>
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
        </AnimationFade>
      </ScrollView>
    </View>
  );
}

Search.propTypes = {
}

export default Search;


