import React from 'react';
import { View, Text, Button } from 'react-native';

const HelpScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{textAlign: 'center'}}>Hi, I´m a help screen, if you want to see "Home screen" go to 
				app/navigators/stackNavigator/index.js and change isLoggedIn to true, but first get back to the login.
			</Text>
			<Text style={{fontSize: 12, marginTop: 12, marginBottom: 12}}>We´ll do this easier for you in the future 😉</Text>
			<Button
				title="Get Back"
				onPress={() => navigation.goBack()}
			/>
		</View>
	)
};

export default HelpScreen;