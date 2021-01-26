import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2197004Navigator from '../features/BlankScreen2197004/navigator';
import BlankScreen1197003Navigator from '../features/BlankScreen1197003/navigator';
import BlankScreen3197002Navigator from '../features/BlankScreen3197002/navigator';
import Achievements1196999Navigator from '../features/Achievements1196999/navigator';
import BlankScreen24196997Navigator from '../features/BlankScreen24196997/navigator';
import BlankScreen23196606Navigator from '../features/BlankScreen23196606/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2197004: { screen: BlankScreen2197004Navigator },
BlankScreen1197003: { screen: BlankScreen1197003Navigator },
BlankScreen3197002: { screen: BlankScreen3197002Navigator },
Achievements1196999: { screen: Achievements1196999Navigator },
BlankScreen24196997: { screen: BlankScreen24196997Navigator },
BlankScreen23196606: { screen: BlankScreen23196606Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
