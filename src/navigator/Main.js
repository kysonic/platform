import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PreloaderScreen from '@screens/Preloader';
import AuthScreen from '@screens/Auth';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

const MainNavigator = createStackNavigator({
    Preloader: {screen: PreloaderScreen},
    // Auth
    Auth: {screen: AuthScreen},
    // Rest
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
}, {
    initialRouteName: 'Preloader',
});

const App = createAppContainer(MainNavigator);

export default App;
