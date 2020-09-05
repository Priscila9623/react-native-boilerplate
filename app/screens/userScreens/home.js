import React from 'react';
import { View, Text, Button } from 'react-native';
import FastImage from 'react-native-fast-image';
import SvgImage from '@icons/example.svg';
import { fonts } from '@config/style';
import Config from "react-native-config";

const HomeScreen = ({ navigation }) => {
	return(
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<SvgImage width={120} height={40} />
			<Text style={{fontFamily: fonts.WorkSansRegular}}>
				{`Home Screen ${Config.EXAMPLE}`}
			</Text>
			<FastImage
				style={{ width: 200, height: 200 }}
				source={{
					uri: 'https://unsplash.it/400/400?image=1',
					headers: { Authorization: 'someAuthToken' },
					priority: FastImage.priority.normal,
				}}
				resizeMode={FastImage.resizeMode.contain}
				fallback
			/>
			<View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
				<Button
					title="About"
					onPress={() => navigation.navigate('About')}
				/>
				<Button
					title="Sign out"
					onPress={() => navigation.goBack()}
				/>
			</View>
		</View>
	)
};

export default HomeScreen;