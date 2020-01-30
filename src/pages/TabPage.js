import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import Navigator in our project
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TourPage from './TourPage';
import DemographicPage from './DemographicPage';
import PremiumsPage from './PremiumsPage';
import ConfirmationPage from './ConfirmationPage';

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
const TabPage = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#607D8B',
      },
      headerTitleStyle: {
        padding: 5,
      },
      headerTintColor: '#FFFFFF',
      title: 'Welk Resorts',
      headerTitleAlign: 'center',
    },
  },
});
//In version 2+ createAppContainer was default container
//but in version 3+ you have to export it manually
//In Version 2+
//export default App;
//In Version 3+
export default createAppContainer(TabPage);
//export default App;
