//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Drawer, Button, Hidden } from '@material-ui/core';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Typography from '@material-ui/core/Typography';

//Local imports*
import Logo from '../../../assets/logo.png';
import FriendsList from '../../../containers/Header/Menu/FriendsList';
import SearchBar from '../../../containers/Header/Menu/SearchBar';
import { Link } from 'react-router-dom';
import useStyles from './style';

type Props = {
	logOut: any;
};

type Anchor = 'left';

const Menu: FunctionComponent<Props> = ({ logOut }) => {
	const classes = useStyles();
	const [ state, setState ] = React.useState({
		left: false
	});

	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');

	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const anchor = 'left';

	const drawer = (
		<div className={classes.drawer}>
			<Link to="/">
				<img className={classes.logo} src={Logo} />
			</Link>
			<SearchBar />
			<Typography className={classes.typo} variant="h6" component="h2">
				Messages privés
			</Typography>
			<FriendsList />
			<Button
				onClick={() => {
					logOut(sessionLogin.uid);
					localStorage.removeItem('isUser');
					localStorage.removeItem('isLogged');
				}}
				color="secondary"
			>
				Deconnexion
			</Button>
		</div>
	);

	return (
		<div className={classes.menu}>
			<React.Fragment key={anchor}>
				<Button onClick={toggleDrawer(anchor, true)}>
					<ViewComfyIcon fontSize="large" color="primary" classes={{ colorPrimary: classes.button }} />
				</Button>
				<Hidden smUp implementation="css">
					<Drawer
						classes={{ paperAnchorLeft: classes.paperAnchorLeft }}
						anchor={anchor}
						open={state[anchor]}
						variant="temporary"
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
						onClose={toggleDrawer(anchor, false)}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer classes={{ paperAnchorLeft: classes.paperAnchorLeft }} variant="permanent" open>
						{drawer}
					</Drawer>
				</Hidden>
			</React.Fragment>
		</div>
	);
};

export default Menu;
