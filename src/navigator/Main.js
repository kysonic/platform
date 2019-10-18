import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '@screens/Home';
import AuthScreen from '@screens/Auth';
import ProfileScreen from '@screens/Profile';

const MainNavigator = createStackNavigator({
    Auth: {screen: AuthScreen},
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen}
}, {
    initialRouteName: 'Auth'
});

const App = createAppContainer(MainNavigator);

export default App;
