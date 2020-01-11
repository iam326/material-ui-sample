import React from 'react';
import 'typeface-roboto';
import Item from './Item';
import logo from './logo.svg';

const items = [
  { title: 'Sample Title 01', body: 'Sample Body 01', image: logo },
  { title: 'Sample Title 02', body: 'Sample Body 02', image: logo },
  { title: 'Sample Title 03', body: 'Sample Body 03', image: logo },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {
          items.map(item => (
            <Item title={item.title} body={item.body} image={item.image} />
          )) 
        }
      </div>
    )
  }
}

export default App;
