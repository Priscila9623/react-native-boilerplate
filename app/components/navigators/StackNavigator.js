import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { shape, arrayOf, string, node, oneOfType, func } from "prop-types";
import { transitionSpecConfig, transitionConfig } from '@helpers/screens/stackNavigatorConfig';

const Stack = createStackNavigator();

const StackNavigatorTemplate = ({initialRouteName, screens}) => {

	return (
		<Stack.Navigator
			initialRouteName={initialRouteName}
			screenOptions={{
				headerShown: false,
				gestureDirection: "horizontal",
				transitionSpec:{
					close: transitionSpecConfig,
					open: transitionSpecConfig,
				},
				cardStyleInterpolator: (props) => transitionConfig(props),
			}}
		>
			{
				screens.map((el) => (
					<Stack.Screen name={el.name} component={el.component} key={el.name} />
				))
			}
		</Stack.Navigator>
	);
};

StackNavigatorTemplate.defaultProps = {
	//
};

StackNavigatorTemplate.propTypes = {
	initialRouteName: string.isRequired,
	screens: arrayOf(
		shape({
			name: string.isRequired,
			component: oneOfType([node, func]),
		}).isRequired
	).isRequired,
};

export default StackNavigatorTemplate;
