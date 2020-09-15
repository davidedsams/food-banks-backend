import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import BankState from './context/bank/BankState'
import './App.css';

const App = () => {
  return (
		<BankState>
			<Router>
				<Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
					My App
				</Fragment>
			</Router>
		</BankState>
	);
}

export default App;
