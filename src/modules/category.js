const SELECT_MENU = 'category/SELECT_MENU';

export const selectMenu = menu => ({ 
	type: SELECT_MENU,
	payload: menu
});

const initialState = {
	selected: '',
	categories: [
		{
			name: 'theme',
			text: '주제별',
		},
		{
			name: 'local',
			text:	'지역별',
		}
	]
};

function category(state = initialState, action) {
	switch(action.type) {
		case SELECT_MENU:
			return {
				...state,
				selected: action.payload
			};
		default:
			return state;
	}
}

export default category;
