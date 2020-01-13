import React from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Item from './Item';

const image = 'http://img.youtube.com/vi/IQnciTSrowU/mqdefault.jpg';

interface State {
  items: any;
  value: string;
}

class App extends React.Component<{}, State> {

  items = [
    { 
      title: 'Sample Title 01',
      body: 'Sample Body 01',
      image,
      goodCount: 100,
      badCount: 200,
      isFavorite: true
    },
    {
      title: 'Sample Title 02',
      body: 'Sample Body 02',
      image,
      goodCount: 300,
      badCount: 400,
      isFavorite: false
    },
    {
      title: 'Sample Title 03',
      body: 'Sample Body 03',
      image,
      goodCount: 500,
      badCount: 600,
      isFavorite: true
    }
  ];

  constructor(props: {}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.good = this.good.bind(this);
    this.bad = this.bad.bind(this);
    this.favorite = this.favorite.bind(this);
    this.state = {
      items: this.items,
      value: 'ranking'
    };
  }

  handleClick(eventType: string, i: number): void {
    switch (eventType) {
      case 'good':
        this.good(i);
        break;
      case 'bad':
        this.bad(i);
        break;
      case 'favorite':
        this.favorite(i);
        break;
      default:
        break;
    }
  }

  good(i: number): void {
    const items = this.state.items.slice();
    items[i].goodCount++;
    this.setState({items});
  }

  bad(i: number): void {
    const items = this.state.items.slice();
    items[i].badCount++;
    this.setState({items});
  }

  favorite(i: number): void {
    const items = this.state.items.slice();
    items[i].isFavorite = !items[i].isFavorite;
    this.setState({items});
  }

  render() {
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
      >
        <AppBar
          position="fixed"
          style={{
            alignItems: 'center',
            fontSize: '24px'
          }}>
          <Toolbar>
            Title
          </Toolbar>
        </AppBar>
        <div style={{marginTop: '70px'}}>
          {
            this.items.map((item, index) => (
              <Item 
                key={index}
                index={index}
                title={item.title}
                body={item.body}
                image={item.image}
                goodCount={item.goodCount}
                badCount={item.badCount}
                isFavorite={item.isFavorite}
                onClick={this.handleClick}
              />
            )) 
          }
        </div>
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
          <BottomNavigation
            value={this.state.value}
            showLabels
            onChange={(ev, value) => this.setState({value})}
          >
            <BottomNavigationAction label="Ranking" value="ranking" icon={<WhatshotIcon />} />
            <BottomNavigationAction label="Playlist" value="playlist" icon={<PlaylistPlayIcon />} />
            <BottomNavigationAction label="Channel" value="channel" icon={<AccountCircleIcon />} />
          </BottomNavigation>
        </AppBar>
      </Grid>
    )
  }
}

export default App;
