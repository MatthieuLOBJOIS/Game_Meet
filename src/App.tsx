//Imports of dependencies
import React, { FunctionComponent } from 'react';

//Local imports
import './App.css';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: FunctionComponent = () => {
	return (
		<div className="App">
			<Header />
			<Home />
			<Footer />
		</div>
	);
};

export default App;
