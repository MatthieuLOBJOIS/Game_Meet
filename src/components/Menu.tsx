//Imports of dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, Button} from '@material-ui/core';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

//Local imports*
import Logo from '../style/logo.png';

const useStyles = makeStyles({
  menu: {
    position: "fixed",
    zIndex: 1000

  },
  paperAnchorLeft: {
    backgroundColor: '#161c2e',
  },
  logo: {
    height: '20em',
    width: '20em'
  },
  button: {
    color: "#161c2e"
  }
});

type Anchor = 'left';

const Menu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = 'left';
  return (
    <div className={classes.menu}>
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ViewComfyIcon fontSize="large" color="primary" classes={{colorPrimary: classes.button}}/></Button>
          <Drawer classes={{paperAnchorLeft: classes.paperAnchorLeft}} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <img className={classes.logo} src={Logo} />
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default Menu; 