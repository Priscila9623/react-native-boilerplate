import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import MainNavigator from './navigators/stackNavigator';
import SplashScreen from 'react-native-splash-screen';

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
