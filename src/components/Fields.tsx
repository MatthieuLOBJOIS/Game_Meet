//Imports of dependencies
import React from 'react';
import {
  createStyles,
  Theme,
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef6c35'
    },
  },
});

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Entrée votre mail"
          id="mail"
        />
        <TextField
          className={classes.margin}
          label="Entrée votre mot de passe"
          id="password"
        />
      </ThemeProvider>
    </form>
  );
}