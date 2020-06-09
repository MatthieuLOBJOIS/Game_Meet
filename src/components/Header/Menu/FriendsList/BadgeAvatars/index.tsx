//Imports of dependencies
import React, { FunctionComponent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { StyledBadge, useStyles } from './style';

type Props = {
	isLogged: boolean | null;
};

const BadgeAvatars: FunctionComponent<Props> = ({ isLogged }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<StyledBadge
				invisible={isLogged ? false : true}
				overlap="circle"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				variant="dot"
			>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			</StyledBadge>
		</div>
	);
};

export default BadgeAvatars;
