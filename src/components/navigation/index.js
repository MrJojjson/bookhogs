/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Platform
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
// import { Icon } from 'react-native-elements';

import {
  TOP_BACKGROUND_COLOR,
  BOTTOM_BACKGROUND_COLOR,
  SMALL_ICON_SIZE,
} from '../../styles/common';

import LandingPageContainer from '../../containers/landingPage';

// export const FeedStack = StackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: `HomeScreen`    }),
//   },
//   Search: {
//     screen: Search,
//     navigationOptions: ({ navigation }) => ({
//       title: `Search`    }),
//   },
//   Collection: {
//     screen: Collection,
//     navigationOptions: ({ navigation }) => ({
//       title: `Collection`    }),
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: ({ navigation }) => ({
//       title: `Profile`,
//     }),
//   }
// });

const tabBarStyleAndroid = {
  backgroundColor: 'rgba(161, 161, 161, 1)',
  height:44,

};

const tabBarStyleIos = {
  backgroundColor: 'rgba(215, 215, 215, 0.75)',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  borderTopWidth:0,
  height:44
};

const Tabs = TabNavigator({
  Home: {
    screen: LandingPageContainer, // Replaced Feed with FeedStack
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarIcon: ({ focused }) => <Icon name="home" type="entypo" size={SMALL_ICON_SIZE} color={focused ? TOP_BACKGROUND_COLOR : BOTTOM_BACKGROUND_COLOR} />
    },
    
  },
  // Search: {
  //   screen: Search, // Replaced Feed with FeedStack
  //   navigationOptions: {
  //     tabBarLabel: 'Search',
  //     tabBarIcon: ({ tintColor, focused }) => <Icon name="magnifying-glass" type="entypo"  size={theme.iconSize + 6} color={focused ? theme.fontLightColor : "#ddd"} />
  //   },
  // },
  // Collection: {
  //   screen: Collection, // Replaced Feed with FeedStack
  //   navigationOptions: {
  //     tabBarLabel: 'Collection',
  //     tabBarIcon: ({ tintColor, focused }) => <Icon name="list" type="entypo"  size={theme.iconSize + 6} color={focused ? theme.fontLightColor : "#ddd"} />
  //   }
  // },
  // Wishlist: {
  //   screen: Wishlist, // Replaced Feed with FeedStack
  //   navigationOptions: {
  //     tabBarLabel: 'Wishlist',
  //     tabBarIcon: ({ tintColor, focused }) => <Icon name="heart" type="entypo"  size={theme.iconSize + 6} color={focused ? theme.fontLightColor : "#ddd"} />
  //   }
  // },
  // Profile: {
  //   screen: Profile, // Replaced Feed with FeedStack
  //   navigationOptions: {
  //     tabBarLabel: 'Profile',
  //     tabBarIcon: ({ tintColor, focused }) => <Icon name="user" type="entypo" size={theme.iconSize + 6} color={focused ? theme.fontLightColor : "#ddd"} />
  //   },
  // },
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



export const Navigation = StackNavigator({
  
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