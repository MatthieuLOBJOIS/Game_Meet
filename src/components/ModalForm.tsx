//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import { Link, useLocation } from 'react-router-dom';

//Local imports
import Form from '../containers/Form';

type Props = {
	login: String;
	register: String;
	isRegister: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		},
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch'
			}
		}
	})
);

interface FadeProps {
	children?: React.ReactElement;
	in: boolean;
	onEnter?: () => {};
	onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		}
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

const ModalForm: FunctionComponent<Props> = ({ login, register, isRegister }) => {
	const classes = useStyles();
	let location = useLocation();
	const [ open, setOpen ] = React.useState(true);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				className={classes.modal}
				open={open}
				//onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<Form />
						{location.pathname === `/${login}` && (
							<Typography className={classes.root}>
								<Link to={`${register}`}>{`${register[0].toUpperCase()}${register.slice(1)}`}</Link>
							</Typography>
						)}
						{isRegister === true && (
							<span
								style={{
									position: 'absolute',
									top: '20%',
									color: '#ef6c35',
									textAlign: 'center',
									backgroundColor: 'red'
								}}
							>
								Votre compte à était enregisté !
							</span>
						)}
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default ModalForm;
