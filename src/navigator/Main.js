import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PreloaderScreen from '@screens/Preloader';
import AuthScreen from '@screens/auth/Auth';
import AuthLoginPasswordSignInScreen from '@screens/auth/AuthLoginPasswordSignIn';
import AuthLoginPasswordSignUpScreen from '@screens/auth/AuthLoginPasswordSignIn';
import AuthPhoneScreen from '@screens/auth/AuthPhone';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

const MainNavigator = createStackNavigator({
    Preloader: {screen: PreloaderScreen},
    // Auth
    Auth: {screen: AuthScreen},
    AuthLoginPasswordSignIn: {screen: AuthLoginPasswordSignInScreen},
    AuthLoginPasswordSignUp: {screen: AuthLoginPasswordSignUpScreen},
    AuthPhone: {screen: AuthPhoneScreen},
    // Rest
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
}, {
    initialRouteName: 'Preloader',
});

const App = createAppContainer(MainNavigator);

export default App;
