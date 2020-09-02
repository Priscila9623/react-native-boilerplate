import { Easing } from 'react-native';
import { forFade, forSlideHorizontal } from '@helpers/screens/transitionsList';

const transitionSpecConfig = {
	animation: 'timing',
	config: {
		duration: 750,
		easing: Easing.out(Easing.poly(4)),
	},
};

const transitionConfig = (props, option='FOR_SLIDE_HORIZONTAL') => {
	switch (option) {
		case 'FOR_FADE':
			return forFade(props);
		case 'FOR_SLIDE_HORIZONTAL':
			return forSlideHorizontal(props);
		default:
			return {};	
	}
}

export {
	transitionSpecConfig,
	transitionConfig,
};
