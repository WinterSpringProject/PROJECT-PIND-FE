const SELECT_MENU = 'menu/SELECT_MENU';

export const selectMenu = menu => ({
	type: SELECT_MENU,
	payload: menu
});

const initialState = {
	selected: '',
	menus: [
		{
			name: 'theme',
			text: '주제별',
		},
		{
			name: 'local',
			text:	'지역별',
		{
			name: 'newProject',
			text: '새프로젝트'
		}
	]
};

function menu(state = initialState, action) {
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

export default menu;
