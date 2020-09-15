import React, { useState, useContext } from 'react';
import BankContext from '../../context/bank/bankContext';

const BankForm = () => {
	const bankContext = useContext(BankContext);

	const [bank, setBank] = useState({
		name: '',
		location: '',
		typesOfFood: '',
		hoursOfOperation: '',
	});

	const { name, location, typesOfFood, hoursOfOperation } = bank;

	const onChange = (e) => setBank({ ...bank, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		bankContext.addBank(bank);
		setBank({
			name: '',
			location: '',
			typesOfFood: '',
			hoursOfOperation: '',
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Add Bank</h2>
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Location'
				name='location'
				value={location}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Types Of Food'
				name='typesOfFood'
				value={typesOfFood}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Hours Of Operation'
				name='hoursOfOperation'
				value={hoursOfOperation}
				onChange={onChange}
			/>
			<div>
				<input
					type='submit'
					value='Add Bank'
					className='btn btn-primary btn-block'
				/>
			</div>
		</form>
	);
};

export default BankForm;
