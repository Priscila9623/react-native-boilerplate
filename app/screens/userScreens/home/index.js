import { View, Text, Button } from 'react-native';

import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';

import { fonts } from '@config/style';
import SvgImage from '@icons/example.svg';

import styles from './styles';

const HomeScreen = ({ navigation }) => (
	<View style={styles.container}>
		<SvgImage width={120} height={40} />
		<Text style={{fontFamily: fonts.WorkSansRegular}}>
			{`Home Screen ${Config.EXAMPLE}`}
		</Text>
		<FastImage
			style={styles.image}
			source={{
				uri: 'https://unsplash.it/400/400?image=1',
				headers: { Authorization: 'someAuthToken' },
				priority: FastImage.priority.normal
			}}
			resizeMode={FastImage.resizeMode.contain}
			fallback
		/>
		<View style={styles.buttons}>
			<Button
				title='About'
				onPress={() => navigation.navigate('About')}
			/>
			<Button
				title='Sign out'
				onPress={() => navigation.goBack()}
			/>
		</View>
	</View>
);

export default HomeScreen;
