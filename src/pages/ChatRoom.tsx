//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import BadgeAvatars from '../components/BadgeAvatars';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ChatField from '../components/Fields/ChatField';
import ButtonSubmit from '../components/ButtonSubmit';

type Props = {
	listFriends: any;
	getListFriends: any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		typo: {
			color: '#161c2e'
		}
	})
);

const ChatRoom: FunctionComponent<Props> = ({ listFriends, getListFriends }) => {
	const param: any = useParams();
	const classes = useStyles();
	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
	useEffect(() => {
		sessionLogin.isLogged === true && getListFriends(sessionLogin.uid);
	}, []);

	return (
		<Grid item style={{ height: '100vh' }} xs={12}>
			{listFriends.map((friends: any) => {
				if (friends.pseudo === param.id) {
					//console.log(friends, param.id);
					return (
						<div>
							<Typography
								style={{ textAlign: 'center' }}
								className={classes.typo}
								variant="h4"
								component="h1"
							>
								{friends.pseudo} chatRoom
							</Typography>
							<div style={{ height: '80vh' }}>
								<p>Bonjour</p>
								<p>Ca va ?</p>
								<p>oui et toi ?</p>
								<p>ça va</p>
							</div>
							<div>
								<ChatField label={friends.pseudo} />
								<ButtonSubmit />
							</div>
						</div>
					);
				}
			})}
		</Grid>
	);
};

export default ChatRoom;
