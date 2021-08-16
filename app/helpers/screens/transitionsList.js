import { Animated } from 'react-native';

const forFade = ({ current }) => ({
	cardStyle: {
		opacity: current.progress

	}
});

const forSlideHorizontal = ({ current, next, inverted, layouts: { screen } }) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp'
		}),
		next
			? next.progress.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 1],
				extrapolate: 'clamp'
			})
			: 0
	);

	return {
		cardStyle: {
			transform: [{
				translateX: Animated.multiply(
					progress.interpolate({
						inputRange: [0, 1, 2],
						outputRange: [
							screen.width, // Focused, but offscreen in the beginning
							0, // Fully focused
							screen.width * -0.3 // Fully unfocused
						],
						extrapolate: 'clamp'
					}),
					inverted
				)
			}]
		}
	};
};


// EN REVISION
const forSlideBottom = ({index, current: { progress }, layouts: { screen }})=>{
	const translateY = progress.interpolate({
		inputRange: [index - 1, index],
		outputRange: [ screen.height, 0]
	});
	return {
		cardStyle: { transform: [ { translateY } ]}
	};
};

export {
	forFade,
	forSlideHorizontal,
	forSlideBottom
};
