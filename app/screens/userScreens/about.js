import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>About Screen</Text>
			<Button
				title="Get Back to Home"
				onPress={() => navigation.goBack()}
			/>
		</View>
	)
};

export default AboutScreen;