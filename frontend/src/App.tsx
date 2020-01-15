import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
import ItemList from './ItemList';

function App() {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
    >
      <BrowserRouter>
        <Header>Card List Sample</Header>
          <div>
            <Route exact path='/' component={ItemList} />
            <Route path='/playlist' component={Playlist} />
            <Route path='/channel' component={Channel} />
          </div>
        <Footer />
      </BrowserRouter>
    </Grid>
  )
}

function Playlist() {
  return (
    <div style={{marginTop: '70px'}}>
      <h1>playlist</h1>
    </div>
  )
}

function Channel() {
  return (
    <div style={{marginTop: '70px'}}>
      <h1>channel</h1>
    </div>
  )
}

export default App;
