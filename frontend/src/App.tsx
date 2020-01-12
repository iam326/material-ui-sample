import React from 'react';
import 'typeface-roboto';
import Item from './Item';
import logo from './logo.svg';

interface State {
  items: any
}

class App extends React.Component<{}, State> {

  items = [
    { 
      title: 'Sample Title 01',
      body: 'Sample Body 01',
      image: logo,
      goodCount: 100,
      badCount: 200,
      isFavorite: true
    },
    {
      title: 'Sample Title 02',
      body: 'Sample Body 02',
      image: logo,
      goodCount: 300,
      badCount: 400,
      isFavorite: false
    },
    {
      title: 'Sample Title 03',
      body: 'Sample Body 03',
      image: logo,
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
      items: this.items
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
      <div>
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
    )
  }
}

export default App;
