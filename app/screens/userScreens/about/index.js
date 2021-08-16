import { View, Text, Button } from 'react-native';

import styles from './styles';

const AboutScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Text>About Screen</Text>
		<Button
			title='Get Back to Home'
			onPress={() => navigation.goBack()}
		/>
	</View>
);

export default AboutScreen;
