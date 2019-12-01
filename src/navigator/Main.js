import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { fadeIn } from 'react-navigation-transitions';

import PreloaderScreen from '@screens/Preloader';
import AuthScreen from '@screens/Auth';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';
import NewsScreen from '@screens/News';
import InboxScreen from '@screens/Inbox';
import MenuScreen from '@screens/Menu';
import NotConnectedScreen from '@screens/NotConnected';

const MainNavigator = createStackNavigator({
    Preloader: {screen: PreloaderScreen},
    Auth: {screen: AuthScreen},
    Profile: {screen: ProfileScreen},
    Home: {screen: HomeScreen},
    News: {screen: NewsScreen},
    Inbox: {screen: InboxScreen},
    Menu: {screen: MenuScreen},
    NotConnected: {screen: NotConnectedScreen},
}, {
    initialRouteName: 'Preloader',
    headerMode: 'float',
    defaultNavigationOptions: {
        header: () => null,
    },
/*    transitionConfig: () => fadeIn(),*/
});

const App = createAppContainer(MainNavigator);

export default App;
