import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BankContext from '../../context/bank/bankContext';

const BankItem = ({ bank }) => {
    const bankContext = useContext(BankContext);
    const { deleteBank } = bankContext;

	const { id, name, location, typesOfFood, hoursOfOperation } = bank;

    const onDelete = () => {
        deleteBank(id);
    }

	return (
		<div className=''>
			<h3 className=''>{name}</h3>
			<ul className=''>
				{location && (
					<li>
						<i className=''></i> {location}
					</li>
				)}
				{typesOfFood && (
					<li>
						<i className=''></i> {typesOfFood}
					</li>
				)}
				{hoursOfOperation && (
					<li>
						<i className=''></i> {hoursOfOperation}
					</li>
				)}
			</ul>
			<p>
				<button className=''>Edit</button>
				<button className='' onClick={onDelete}>Delete</button>
			</p>
		</div>
	);
};

BankItem.propTypes = {
	bank: PropTypes.object.isRequired,
};

export default BankItem;
