//Imports of dependencies
import React, { FunctionComponent } from 'react';

//Local imports
import Menu from './Menu';
import ModalForm from './ModalForm';

const Header: FunctionComponent = () => {
	return (
		<div>
			<Menu />
			<ModalForm formType="login" />
			<ModalForm formType="register" />
		</div>
	);
};

export default Header;
