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
} from '../../styles/common';

import LandingPageContainer from '../../containers/landingPage';

const tabBarStyleAndroid = {
  backgroundColor: 'rgba(215, 215, 215, 0.3)',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  borderTopWidth:1,
  borderTopColor: '#FFFFFF',
  height:44
};

const tabBarStyleIos = {
  backgroundColor: 'rgba(215, 215, 215, 0.3)',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  borderTopWidth:1,
  borderTopColor: '#FFFFFF',
  height:44
};

const Tabs = createBottomTabNavigator({
  Home: {
    screen: LandingPageContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="home" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Search: {
    screen: LandingPageContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="search" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Collection: {
    screen: LandingPageContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="list" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Wishlist: {
    screen: LandingPageContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="heart" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
    },
  },
  Profile: {
    screen: LandingPageContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <Icon name="user" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : FONT_LIGHT_COLOR} />
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
  LandingPageContainer: {screen: LandingPageContainer},
  // Search: {screen: Search},
  // Collection: {screen: Collection},
  // Wishlist: {screen: Wishlist},
  // Profile: {screen: Profile},
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