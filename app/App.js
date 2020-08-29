import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import Splash from './screens/splash';

LogBox.ignoreAllLogs();
const App = () => {
	return (
		<NavigationContainer>
			<Splash />
		</NavigationContainer>
	);
};

export default App;