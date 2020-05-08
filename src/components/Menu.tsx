//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button } from '@material-ui/core';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Typography from '@material-ui/core/Typography';

//Local imports*
import Logo from '../assets/logo.png';
import FriendsList from '../containers/FriendsList';
import SearchBar from '../containers/SearchBar';
import { Link } from 'react-router-dom';

type Props = {
	logOut: any;
};

type Anchor = 'left';

const useStyles = makeStyles({
	menu: {
		position: 'fixed',
		zIndex: 1000
	},
	paperAnchorLeft: {
		backgroundColor: '#161c2e'
	},
	logo: {
		height: '20em',
		width: '20em'
	},
	button: {
		color: '#161c2e'
	},
	typo: {
		color: 'white',
		textAlign: 'center'
	}
});

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
	return (
		<div className={classes.menu}>
			<React.Fragment key={anchor}>
				<Button onClick={toggleDrawer(anchor, true)}>
					<ViewComfyIcon fontSize="large" color="primary" classes={{ colorPrimary: classes.button }} />
				</Button>
				<Drawer
					classes={{ paperAnchorLeft: classes.paperAnchorLeft }}
					anchor={anchor}
					open={state[anchor]}
					onClose={toggleDrawer(anchor, false)}
				>
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
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default Menu;
