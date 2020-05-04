//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

//Local imports
import Menu from '../containers/Menu';
import ModalForm from '../containers/ModalForm';

type Props = {
	login: String;
	register: String;
};

const Header: FunctionComponent<Props> = ({ login, register }) => {
	return (
		<div>
			<Menu />
			<Route path={[ `/${login}`, `/${register}` ]} component={ModalForm} />
		</div>
	);
};

export default Header;
