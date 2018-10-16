import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { toJS } from 'mobx';

import {AnimationFadeInUp, AnimationFadeInDown, AnimationFadeInLeft, AnimationFadeInRight} from '../animations';

import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from '../styles/common';

class GenericCarousel extends React.PureComponent {
  
  _renderItem({item, index}){
    const { onItemPress } = this.props;
    if (item && item.volumeInfo) {
      return (
        <AnimationFadeInLeft style={styles.carouselItemView}>
            <AnimationFadeInLeft style={styles.imageContainer}>
              <TouchableOpacity onPress={() => onItemPress(index)} style={styles.imageContainer}>
                <Image
                  style={styles.cover}
                  source={{
                  uri: typeof item.volumeInfo.imageLinks === 'undefined'
                    ? 'https://goo.gl/images/8Taz6a'
                    : 'https://' + item
                      .volumeInfo
                      .imageLinks
                      .smallThumbnail
                      .substr('http://'.length, item.volumeInfo.imageLinks.thumbnail.length)
                  }}
                />  
              </TouchableOpacity>         
            </AnimationFadeInLeft>
        </AnimationFadeInLeft>
      );
    }
  }

  render() {
    const { dataList, onItemPress } = this.props;
      return (
        <Carousel
          data={dataList}
          extraData={dataList}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH / 2.7}
          renderItem={(item, index) => this._renderItem(item, index, onItemPress)}
        />
      );
  }
}

export default GenericCarousel;

var styles = StyleSheet.create({
  carouselItemView:{
    flexDirection: "column",
    alignItems: "stretch",
    width: SCREEN_WIDTH / 2.7,
  },
  imageContainer: {
    minHeight: SCREEN_HEIGHT / 3.5,
    flexDirection: "row",
    alignItems: "stretch",
    width: SCREEN_WIDTH / 2.85,
  },
  cover: {
    flex: 1,
    resizeMode:'cover',
    width: null,
    height: null,
  },
})