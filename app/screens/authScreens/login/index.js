import { View, Text, Button } from 'react-native';

import styles from './styles';

const LoginScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Text style={styles.text}>
			Hi there, I´m not a real Login but you can try it out navigation in this boilerplate
		</Text>
		<Button title='Go Home Screen' onPress={() => navigation.navigate('Home')} />
	</View>
);

export default LoginScreen;
