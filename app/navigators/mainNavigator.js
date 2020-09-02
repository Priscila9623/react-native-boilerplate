import React from 'react';
import StackNavigatorTemplate from '@components/navigators/StackNavigator';
import HomeScreen from '@screens/home';
import AboutScreen from '@screens/about';

const MainNavigator = () => {

	const screenList = [{
		name: 'Home',
		component: HomeScreen,
	},{
		name: 'About',
		component: AboutScreen,
	}];

	return (
		<StackNavigatorTemplate
			initialRouteName={screenList[0].name}
			screens={screenList}
		/>
	);
};

export default MainNavigator;