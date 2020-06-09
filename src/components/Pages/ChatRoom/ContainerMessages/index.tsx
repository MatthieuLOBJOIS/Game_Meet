//Imports of dependencies
import React, { FunctionComponent, useEffect, useRef } from 'react';
import moment from 'moment';
import useStyles from './style';

type Props = {
	talk: any;
	myFriends: any;
};

const ContainerMessages: FunctionComponent<Props> = ({ talk, myFriends }) => {
	const classes = useStyles();
	const messagesEndRef: any = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
	};
	useEffect(scrollToBottom, [ talk ]);
	return (
		<div className={classes.messagesContainer}>
			{talk.map((message: any, index: number) => {
				return (
					<p
						key={index}
						className={myFriends.pseudo === message.pseudo ? classes.messageFriends : classes.messageUser}
					>
						<p className={myFriends.pseudo === message.pseudo ? classes.timeFriends : classes.timeUser}>
							{moment(Number(message.timestamp)).format('lll')}
						</p>
						{message.message}
					</p>
				);
			})}
			<div ref={messagesEndRef} />
		</div>
	);
};

export default ContainerMessages;
