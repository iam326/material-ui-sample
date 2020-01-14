import React from 'react';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  appbar: {
    top: 'auto',
    bottom: 0
  }
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('ranking');
  return (
    <AppBar position="fixed" color="primary" className={classes.appbar}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Ranking" value="ranking" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Playlist" value="playlist" icon={<PlaylistPlayIcon />} />
        <BottomNavigationAction label="Channel" value="channel" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </AppBar>
  )
}

export default Footer;
