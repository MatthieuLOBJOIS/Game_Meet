import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
	const colorMessage = 'white';
	const paddingMessage = '0 1em 1em';
	const widthMessage = 'max-content';
	const overflowWrapMessage = 'break-word';
	return createStyles({
		messagesContainer: {
			height: '50vh',
			margin: '6em auto 1em',
			padding: '6em 3em 3em ',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'auto',
			backgroundColor: 'white'
		},
		messageUser: {
			color: colorMessage,
			backgroundColor: '#161c2e',
			padding: paddingMessage,
			borderRadius: '2em 1em 1em 0',
			maxWidth: widthMessage,
			overflowWrap: overflowWrapMessage
		},
		messageFriends: {
			color: colorMessage,
			textAlign: 'end',
			backgroundColor: '#ef6c35',
			padding: paddingMessage,
			borderRadius: '1em 2em 0 1em ',
			maxWidth: widthMessage,
			overflowWrap: overflowWrapMessage,
			alignSelf: 'flex-end'
		},
		timeUser: {
			fontSize: '0.6em',
			position: 'relative',
			top: '-2.5em',
			color: '#ef6c35'
		},
		timeFriends: {
			fontSize: '0.6em',
			position: 'relative',
			top: '-2.5em',
			color: '#161c2e'
		}
	});
});

export default useStyles;
