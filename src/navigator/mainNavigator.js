import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen40197387Navigator from '../features/BlankScreen40197387/navigator';
import BlankScreen39197386Navigator from '../features/BlankScreen39197386/navigator';
import BlankScreen38197385Navigator from '../features/BlankScreen38197385/navigator';
import BlankScreen37197384Navigator from '../features/BlankScreen37197384/navigator';
import BlankScreen36197383Navigator from '../features/BlankScreen36197383/navigator';
import BlankScreen35197382Navigator from '../features/BlankScreen35197382/navigator';
import BlankScreen34197381Navigator from '../features/BlankScreen34197381/navigator';
import BlankScreen33197380Navigator from '../features/BlankScreen33197380/navigator';
import BlankScreen32197379Navigator from '../features/BlankScreen32197379/navigator';
import BlankScreen31197378Navigator from '../features/BlankScreen31197378/navigator';
import BlankScreen29197376Navigator from '../features/BlankScreen29197376/navigator';
import BlankScreen28197375Navigator from '../features/BlankScreen28197375/navigator';
import BlankScreen27197374Navigator from '../features/BlankScreen27197374/navigator';
import BlankScreen26197087Navigator from '../features/BlankScreen26197087/navigator';
import BlankScreen25197086Navigator from '../features/BlankScreen25197086/navigator';
import CopyOfBlankScreen12197050Navigator from '../features/CopyOfBlankScreen12197050/navigator';
import CopyOfBlankScreen7197032Navigator from '../features/CopyOfBlankScreen7197032/navigator';
import BlankScreen22197029Navigator from '../features/BlankScreen22197029/navigator';
import BlankScreen21197028Navigator from '../features/BlankScreen21197028/navigator';
import BlankScreen20197027Navigator from '../features/BlankScreen20197027/navigator';
import BlankScreen19197026Navigator from '../features/BlankScreen19197026/navigator';
import BlankScreen18197025Navigator from '../features/BlankScreen18197025/navigator';
import BlankScreen17197024Navigator from '../features/BlankScreen17197024/navigator';
import BlankScreen16197023Navigator from '../features/BlankScreen16197023/navigator';
import BlankScreen15197022Navigator from '../features/BlankScreen15197022/navigator';
import BlankScreen14197021Navigator from '../features/BlankScreen14197021/navigator';
import BlankScreen13197020Navigator from '../features/BlankScreen13197020/navigator';
import BlankScreen12197019Navigator from '../features/BlankScreen12197019/navigator';
import BlankScreen11197018Navigator from '../features/BlankScreen11197018/navigator';
import BlankScreen10197017Navigator from '../features/BlankScreen10197017/navigator';
import BlankScreen9197016Navigator from '../features/BlankScreen9197016/navigator';
import BlankScreen8197015Navigator from '../features/BlankScreen8197015/navigator';
import BlankScreen7197014Navigator from '../features/BlankScreen7197014/navigator';
import BlankScreen6197013Navigator from '../features/BlankScreen6197013/navigator';
import BlankScreen5197012Navigator from '../features/BlankScreen5197012/navigator';
import BlankScreen4197011Navigator from '../features/BlankScreen4197011/navigator';
import BlankScreen3197009Navigator from '../features/BlankScreen3197009/navigator';
import BlankScreen2197008Navigator from '../features/BlankScreen2197008/navigator';
import BlankScreen1197007Navigator from '../features/BlankScreen1197007/navigator';
import BlankScreen0197006Navigator from '../features/BlankScreen0197006/navigator';
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
BlankScreen40197387: { screen: BlankScreen40197387Navigator },
BlankScreen39197386: { screen: BlankScreen39197386Navigator },
BlankScreen38197385: { screen: BlankScreen38197385Navigator },
BlankScreen37197384: { screen: BlankScreen37197384Navigator },
BlankScreen36197383: { screen: BlankScreen36197383Navigator },
BlankScreen35197382: { screen: BlankScreen35197382Navigator },
BlankScreen34197381: { screen: BlankScreen34197381Navigator },
BlankScreen33197380: { screen: BlankScreen33197380Navigator },
BlankScreen32197379: { screen: BlankScreen32197379Navigator },
BlankScreen31197378: { screen: BlankScreen31197378Navigator },
BlankScreen29197376: { screen: BlankScreen29197376Navigator },
BlankScreen28197375: { screen: BlankScreen28197375Navigator },
BlankScreen27197374: { screen: BlankScreen27197374Navigator },
BlankScreen26197087: { screen: BlankScreen26197087Navigator },
BlankScreen25197086: { screen: BlankScreen25197086Navigator },
CopyOfBlankScreen12197050: { screen: CopyOfBlankScreen12197050Navigator },
CopyOfBlankScreen7197032: { screen: CopyOfBlankScreen7197032Navigator },
BlankScreen22197029: { screen: BlankScreen22197029Navigator },
BlankScreen21197028: { screen: BlankScreen21197028Navigator },
BlankScreen20197027: { screen: BlankScreen20197027Navigator },
BlankScreen19197026: { screen: BlankScreen19197026Navigator },
BlankScreen18197025: { screen: BlankScreen18197025Navigator },
BlankScreen17197024: { screen: BlankScreen17197024Navigator },
BlankScreen16197023: { screen: BlankScreen16197023Navigator },
BlankScreen15197022: { screen: BlankScreen15197022Navigator },
BlankScreen14197021: { screen: BlankScreen14197021Navigator },
BlankScreen13197020: { screen: BlankScreen13197020Navigator },
BlankScreen12197019: { screen: BlankScreen12197019Navigator },
BlankScreen11197018: { screen: BlankScreen11197018Navigator },
BlankScreen10197017: { screen: BlankScreen10197017Navigator },
BlankScreen9197016: { screen: BlankScreen9197016Navigator },
BlankScreen8197015: { screen: BlankScreen8197015Navigator },
BlankScreen7197014: { screen: BlankScreen7197014Navigator },
BlankScreen6197013: { screen: BlankScreen6197013Navigator },
BlankScreen5197012: { screen: BlankScreen5197012Navigator },
BlankScreen4197011: { screen: BlankScreen4197011Navigator },
BlankScreen3197009: { screen: BlankScreen3197009Navigator },
BlankScreen2197008: { screen: BlankScreen2197008Navigator },
BlankScreen1197007: { screen: BlankScreen1197007Navigator },
BlankScreen0197006: { screen: BlankScreen0197006Navigator },
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
