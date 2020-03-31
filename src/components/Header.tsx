//Imports of dependencies
import React, { FunctionComponent } from 'react';

//Local imports*
import Menu from './Menu';
import ModalLogin from './ModalLogin';

const Header: FunctionComponent = () => {
	return (<div>
		<Menu/>
		<ModalLogin/>
	</div>
			
	);
};

export default Header;
