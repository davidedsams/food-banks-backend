import React, { useReducer } from 'react';
import uuid from 'uuid';
import bankContext from './bankContext';
import bankReducer from './bankReducer';
import {
	ADD_BANK,
	DELETE_BANK,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_BANK,
	FILTER_BANK,
	CLEAR_FILTER,
} from '../types';

const BankState = (props) => {
	const InitialState = {
		banks: [
			{
				id: 1,
				name: 'Shady Pines Church',
				location: '1660 First Street',
				typesOfFood: 'Canned and dry Goods',
				hoursOfOperation: 'M-F, 9am-5pm',
			},
			{
				id: 2,
				name: 'Sugar Hill Food Bank',
				location: '1222 Second Ave',
				typesOfFood: 'Canned, Dry, Refrigerated, Frozen',
				hoursOfOperation: 'Mondays, Wednesdays and Fridays, 8am-8pm',
			},
		],
	};

	const [state, dispatch] = useReducer(bankReducer, initialState);

	// Add Bank

	// Delete Bank

	// Set Current Bank

	// Clear Current Bank

	// Update Bank

	// Filter Banks

	// Clear Filter

	return (
		<BankContext.Provider
			value={{
				contacts: state.contacts,
			}}>
			{props.children}
		</BankContext.Provider>
	);
};

export default BankState;