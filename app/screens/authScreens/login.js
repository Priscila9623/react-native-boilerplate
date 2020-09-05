import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{textAlign: 'center'}}>Hi there, I´m not a real Login but you can try it out navigation in this boilerplate</Text>
			<Button
				title="Go Home Screen"
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	)
};

export default LoginScreen;