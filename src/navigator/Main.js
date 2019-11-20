import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PreloaderScreen from '@screens/Preloader';
import AuthScreen from '@screens/Auth';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Preloader: {screen: PreloaderScreen},
    Auth: {screen: AuthScreen},
}, {
    initialRouteName: 'Preloader',
    headerMode: 'float',
    defaultNavigationOptions: {
        header: () => null,
    },
});

const App = createAppContainer(MainNavigator);

export default App;
