//Imports of dependencies
import React, { FunctionComponent } from 'react';

//Local imports
import Menu from './Menu';
import Modal from './Modal';

const Header: FunctionComponent = () => {
	return (<div>
		<Menu/>
		<Modal/>
	</div>
			
	);
};

export default Header;
