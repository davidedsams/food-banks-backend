import React from 'react';
import PropTypes from 'prop-types';

const BankItem = ({ bank }) => {
	const { id, name, location, typesOfFood, hoursOfOperation } = bank;

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>{name}</h3>
			<ul className='list'>
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
				<button className=''>Delete</button>
			</p>
		</div>
	);
};

BankItem.propTypes = {
	bank: PropTypes.object.isRequired,
};

export default BankItem;
