//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

//Local imports
import Menu from '../../containers/Header/Menu';
import ModalForm from '../../containers/Header/ModalForm';

type Props = {
	login: String;
	register: String;
};

const Header: FunctionComponent<Props> = ({ login, register }) => {
	return (
		<div>
			<Route exact path={[ `/`, `/chatroom/:id` ]} component={Menu} />
			<Route path={[ `/${login}`, `/${register}` ]} component={ModalForm} />
		</div>
	);
};

export default Header;
