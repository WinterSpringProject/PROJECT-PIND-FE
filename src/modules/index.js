import { combineReducers } from 'redux';
import menu from './menu';
import category from './category';

const rootReducer = combineReducers({
	menu,
	category,
});

export default rootReducer;
