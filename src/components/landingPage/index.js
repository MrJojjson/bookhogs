import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  // StyleSheet,
  // ScrollView,
  // Image,
  // TouchableOpacity,
  // ActivityIndicator
} from 'react-native';

import { AnimationFade } from '../../utilities/animations';

import GenericButton from '../genericElements/button';
import GenericText from '../genericElements/text';
// import GenericCarousel from '../genericElements/carousel';
import LinearGradient from 'react-native-linear-gradient';

import {
  CONTAINER,
  TOP_BACKGROUND_COLOR,
  BOTTOM_BACKGROUND_COLOR,
} from '../../styles/common';

import styles from '../../styles/landingPage';

const LandingPage = () => {
  return (
    <View style={CONTAINER}>
      <LinearGradient
        start={{x: 0.5, y: 0.0}} end={{x: 0.3, y: 1.0}}
        colors={[TOP_BACKGROUND_COLOR, BOTTOM_BACKGROUND_COLOR]}
        style={{ flex: 1 }}>
      <AnimationFade fadeDirection='fadeInDown' duration={1000} style={styles.welcomeTextView}>
          <GenericText title='Welcome namne name' size="large" />
      </AnimationFade>

      <View style={styles.carouselOuterView}>
        <AnimationFade fadeDirection='fadeInLeft' duration={1000} style={styles.carouselHeaderView}>
          <GenericText title="Latest in collection" />
          <GenericButton size="small" title="To collection" />
        </AnimationFade>
        <AnimationFade fadeDirection='fadeInRight' duration={1000} style={styles.carouselView}>
          {/* <GenericCarousel id="collectionCarousel" dataList={store.collectionList.toJS()} onItemPress={(index) => this.onImageCollectionPress(index)}/> */}
        </AnimationFade>
      </View>
      
      <View style={styles.carouselOuterView}>
        <AnimationFade fadeDirection='fadeInLeft' duration={1000} style={styles.carouselHeaderView}>
          <GenericText title="Latest in wishlist" />
          <GenericButton size="small" title="To wishlist" />
        </AnimationFade>
        <AnimationFade fadeDirection='fadeInRight' duration={1000} style={styles.carouselView}>
          {/* <GenericCarousel id="wishlistCarousel" dataList={store.wishlistList.toJS()} onItemPress={(index) => this.onImageWishlistPress(index)}/> */}
        </AnimationFade>
      </View>
      </LinearGradient>
    </View>
      
  );
}

LandingPage.propTypes = {
}

export default LandingPage;
