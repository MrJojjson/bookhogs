import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
} from 'react-native';

import { AnimationFade } from '../../utilities/animations';

import GenericButton from '../genericElements/button';
import GenericText from '../genericElements/text';
// import GenericCarousel from '../genericElements/carousel';

import {
  CONTAINER,
  SCROLL_VIEW_CONTAINER,
} from '../../styles/common';

import styles from '../../styles/home';

const Home = () => {
  return (
    <View style={CONTAINER}>
      <AnimationFade fadeDirection='fadeInDown' duration={1000} style={styles.welcomeTextView}>
          <GenericText title='Welcome namne name' size="large" />
      </AnimationFade>
      <ScrollView style={SCROLL_VIEW_CONTAINER}>
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
      </ScrollView>
    </View>
      
  );
}

Home.propTypes = {
}

export default Home;
