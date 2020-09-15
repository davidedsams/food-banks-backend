import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import BankContext from './bankContext';
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
	const initialState = {
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
	const addBank = (bank) => {
		bank.id = uuid();
		dispatch({ type: ADD_BANK, payload: bank });
	};

	// Delete Bank
	const deleteBank = id => {
		dispatch({ type: DELETE_BANK, payload: id });
	};

	// Set Current Bank

	// Clear Current Bank

	// Update Bank

	// Filter Banks

	// Clear Filter

	return (
		<BankContext.Provider
			value={{
				banks: state.banks,
				addBank,
				deleteBank
			}}>
			{props.children}
		</BankContext.Provider>
	);
};

export default BankState;
