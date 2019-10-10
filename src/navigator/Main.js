import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
