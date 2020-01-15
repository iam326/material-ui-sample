import React from 'react';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';

const useStyles = makeStyles({
  root: {
    marginTop: '70px'
  }
});

const image = 'http://img.youtube.com/vi/IQnciTSrowU/mqdefault.jpg';
const itemList = [
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

function ItemList() {
  const classes = useStyles();
  const [items, setObj] = React.useState(itemList);

  function handleClick(eventType: string, i: number): void {
    switch (eventType) {
      case 'good':
        good(i);
        break;
      case 'bad':
        bad(i);
        break;
      case 'favorite':
        favorite(i);
        break;
      default:
        break;
    }
  }

  function good(i: number): void {
    const _items = items.slice();
    _items[i].goodCount++;
    setObj(_items);
  }

  function bad(i: number): void {
    const _items = items.slice();
    _items[i].badCount++;
    setObj(_items);
  }

  function favorite(i: number): void {
    const _items = items.slice();
    _items[i].isFavorite = !_items[i].isFavorite;
    setObj(_items);
  }

  return (
    <div className={classes.root}>
      {
        items.map((item, index) => (
          <Item 
            key={index}
            index={index}
            title={item.title}
            body={item.body}
            image={item.image}
            goodCount={item.goodCount}
            badCount={item.badCount}
            isFavorite={item.isFavorite}
            onClick={handleClick}
          />
        )) 
      }
    </div>
  )
}

export default ItemList;
