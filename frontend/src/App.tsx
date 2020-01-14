import React from 'react';
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
      <Header>Card List Sample</Header>
      <ItemList />
      <Footer />
    </Grid>
  )
}

export default App;
