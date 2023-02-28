import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const AuthStack = createStackNavigator(
    {
        HomeScreen: {screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Home',         
                headerShown: false, 
        }),}
    },
    {
        initialRouteName: 'HomeScreen'
    }
);

//최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);
