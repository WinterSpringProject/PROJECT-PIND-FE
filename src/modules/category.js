const SELECT_MENU = 'category/SELECT_MENU';

export const selectMenu = menu => ({ 
	type: SELECT_MENU,
	menu
});

const initialState = {
	selected: '',
	categories: [
		{
			name: 'theme',
			text: '주제별',
			click: true
		},
		{
			name: 'local',
			text:	'지역별',
			click: false
		}
	]
};

function category(state = initialState, action) {
	switch(action.type) {
		case SELECT_MENU:
			return {
				...state,
				selected: action.menu
			};
		default:
			return state;
	}
}

export default category;