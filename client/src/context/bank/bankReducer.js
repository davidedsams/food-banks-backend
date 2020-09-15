import {
	ADD_BANK,
	DELETE_BANK,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_BANK,
	FILTER_BANK,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_BANK:
			return {
				...state,
				banks: [...state.banks, action.payload],
            };
        case DELETE_BANK:
            return {
                ...state,
                banks: state.banks.filter(bank => bank.id !== action.payload)
            }
		default:
			return state;
	}
};
