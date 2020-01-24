// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

//This is an example of React Native Tab
//import React from 'react';
//import react in our code.
//In Version 2+
//import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
//In Version 3+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import Navigator in our project
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TourPage from './src/pages/TourPage';
import DemographicPage from './src/pages/DemographicPage';
import PremiumsPage from './src/pages/PremiumsPage';
import ConfirmationPage from './src/pages/ConfirmationPage';
//import TabScreen from './pages/TabScreen';

//Making TabNavigator which will bw called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const TabScreen = createMaterialTopTabNavigator(
  {
    Tour: {screen: TourPage},
    Demographic: {screen: DemographicPage},
    Premium: {screen: PremiumsPage},
    Confirmation: {screen: ConfirmationPage},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#000000',
      style: {
        backgroundColor: '#607D8B',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 13,
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 3,
      },
    },
  },
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#607D8B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Welk Resorts',
    },
  },
});
//In version 2+ createAppContainer was default container
//but in version 3+ you have to export it manually
//In Version 2+
//export default App;
//In Version 3+
export default createAppContainer(App);
//export default App;
