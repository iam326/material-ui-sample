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
  index: number;
  title: string;
  body: string;
  image: string;
  goodCount: number;
  badCount: number;
  isFavorite: boolean;
  onClick: (eventType: string, i: number) => void;
}

interface ItemState {
}

class Item extends React.Component<ItemProps, ItemState> {
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
            <ThumbUpIcon
              onClick={(_: any) => this.props.onClick('good', this.props.index)}
            />
          </IconButton>
          <span>{this.props.goodCount}</span>
          <IconButton aria-label="thumb-down">
            <ThumbDownIcon
              onClick={(_: any) => this.props.onClick('bad', this.props.index)}
            />
          </IconButton>
          <span>{this.props.badCount}</span>
          <IconButton aria-label="favorite">
            {
              this.props.isFavorite 
                ? <StarIcon
                    onClick={(_: any) => this.props.onClick('favorite', this.props.index)}
                  />
                : <StarBorderIcon
                    onClick={(_: any) => this.props.onClick('favorite', this.props.index)}
                  />
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
