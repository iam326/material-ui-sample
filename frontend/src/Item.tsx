import React from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDownOutlined';

interface ItemProps {
  title: string;
  body: string;
  image: string;
}

interface ItemState {
  goodCount: number,
  badCount: number,
  isFavorite: boolean;
}

class Item extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    this.state = {
      goodCount: 0,
      badCount: 0,
      isFavorite: false
    }
    this.favorite = this.favorite.bind(this);
    this.good = this.good.bind(this);
    this.bad = this.bad.bind(this);
  }

  favorite(e: React.MouseEvent): void {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  good(e: React.MouseEvent): void {
    this.setState({
      goodCount: this.state.goodCount + 1
    });
  }

  bad(e: React.MouseEvent): void {
    this.setState({
      badCount: this.state.badCount + 1
    });
  }

  render() {
    return (
      <Card style={{paddingTop: '10px', marginBottom: '10px', maxWidth: 275}}>
        <CardMedia
          style={{ height: 0, paddingTop: '56%'}}
          image={this.props.image}
          title="logo"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="thumb-up">
            <ThumbUpIcon onClick={this.good} />
          </IconButton>
          <span>{this.state.goodCount}</span>
          <IconButton aria-label="thumb-down">
            <ThumbDownIcon onClick={this.bad} />
          </IconButton>
          <span>{this.state.badCount}</span>
          <IconButton aria-label="favorite">
            {
              this.state.isFavorite 
                ? <StarIcon onClick={this.favorite} />
                : <StarBorderIcon onClick={this.favorite} />
            }
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default Item;
