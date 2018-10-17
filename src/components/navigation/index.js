/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Platform
} from 'react-native';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  TOP_BACKGROUND_COLOR,
  SMALL_ICON_SIZE,
  FONT_LIGHT_COLOR,
  NAV_HEIGHT,
} from '../../styles/common';

import HomeContainer from '../../containers/home';
import SearchContainer from '../../containers/search';
import CollectionContainer from '../../containers/collection';
import WishlistContainer from '../../containers/wishlist';
import ProfileContainer from '../../containers/profile';

const tabBarStyleAndroid = {
  backgroundColor: 'rgba(215, 215, 215, 0.3)',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  borderTopWidth:1,
  borderTopColor: '#FFFFFF',
  height: NAV_HEIGHT
};

const tabBarStyleIos = {
  backgroundColor: 'rgba(215, 215, 215, 0.3)',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  borderTopWidth:1,
  borderTopColor: '#FFFFFF',
  height: NAV_HEIGHT,
  zIndex: 100000
};

const Tabs = createBottomTabNavigator({
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="user" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Search: {
    screen: SearchContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="search" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="home" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Search: {
    screen: SearchContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="search" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Collection: {
    screen: CollectionContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="list" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Wishlist: {
    screen: WishlistContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="heart" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  lazy:true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: TOP_BACKGROUND_COLOR,
    showIcon: true,
    showLabel:false,
    upperCaseLabel: false,
    style: Platform.OS === 'ios' ? tabBarStyleIos : tabBarStyleAndroid
    
},
});



export const Navigation = createStackNavigator({
  
  Root: {screen: Tabs},
  HomeContainer: {screen: HomeContainer},
  SearchContainer: {screen: SearchContainer},
  CollectionContainer: {screen: CollectionContainer},
  WishlistContainer: {screen: WishlistContainer},
  ProfileContainer: {screen: ProfileContainer},
  // SingleBook: {screen: SingleBook},
  // Registration: {screen: Registration},
  // RegistrationDone: {screen: RegistrationDone},
  // JoinOrCreateGroup: {screen: JoinOrCreateGroup}
},
{
  initialRouteName: 'Root',
  headerMode: 'none',
  swipeEnabled: false,
  lazy: true,
  navigationOptions: {
    gesturesEnabled: false,
  },
}
);

export default Navigation;