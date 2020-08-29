import { SET_EJEMPLO } from '@actions/ejemplo.action';

const initialState = {
	nombre:'',
	apellido:'',
};

export default (state = initialState, action) => {
	switch (action.type){
	case SET_EJEMPLO:
		return action.payload;
	default: return state;
	}
};
