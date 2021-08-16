import {useEffect} from 'react';
import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import MainNavigator from './navigators/stackNavigator';

LogBox.ignoreAllLogs();
const App = () => {

	useEffect(()=>{
		SplashScreen.hide();
	},[]);

	return (
		<NavigationContainer>
			<MainNavigator />
		</NavigationContainer>
	);
};

export default App;
