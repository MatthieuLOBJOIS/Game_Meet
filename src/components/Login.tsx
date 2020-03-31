import React, {FunctionComponent} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Field from './Field';
import ButtonSubmit from './ButtonSubmit';
import '../index.css';

type Props = {
	handleClose: any
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    typo: {
      color: '#161c2e',
    },
  }),
);

const Login: FunctionComponent<Props> = ({handleClose}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <Typography className={classes.typo} variant="h5" component="h2">
          Connexion
				</Typography>
      <Field />
      <ButtonSubmit/>
      <Typography className={classes.root}>
      <Link href="#" onClick={handleClose}>
        Inscription
      </Link>
    </Typography>
    </form>
  );
}

export default Login;