import React, { Fragment, useContext } from 'react';
import BankItem from './BankItem';
import BankContext from '../../context/bank/bankContext';

const Banks = () => {
	const bankContext = useContext(BankContext);

	const { banks } = bankContext;

	return (
		<Fragment>
			{banks.map((bank) => (
				<BankItem key={bank.id} bank={bank} />
			))}
		</Fragment>
	);
};

export default Banks;
