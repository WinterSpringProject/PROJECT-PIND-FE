const SELECT_CATEGORY = 'category/SELECT_CATEGORY';

export const selectCategory = category => ({ 
	type: SELECT_CATEGORY,
	payload: category
});

const initialState = {
	selected: '',
	categories: [
		{
			name: 'programming',
			text: '프로그래밍',
		},
		{
			name: 'startup',
			text:	'창업',
		},
		{
			name: 'study',
			text:	'스터디',
		},
		{
			name: 'contest',
			text:	'공모전',
		},
		{
			name: 'exercise',
			text:	'운동',
		},
		{
			name: 'hobby',
			text:	'취미',
		}
	]
};

function category(state = initialState, action) {
	switch(action.type) {
		case SELECT_CATEGORY:
			return {
				...state,
				selected: action.payload
			};
		default:
			return state;
	}
}

export default category;
