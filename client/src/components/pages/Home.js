import React from 'react';
import Banks from '../banks/Banks';
import BankForm from '../banks/BankForm';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
                <BankForm />
            </div>
			<div>
				<Banks />
			</div>
		</div>
	);
};

export default Home;
