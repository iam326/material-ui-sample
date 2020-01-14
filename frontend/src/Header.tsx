import React from 'react';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

interface Props {
  children: string;
}

const useStyles = makeStyles({
  appbar: {
    alignItems: 'center',
    fontSize: '24px'
  }
});

function Header(props: Props) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        {props.children}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
