import React from 'react';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDownOutlined';

interface Props {
  index: number;
  title: string;
  body: string;
  image: string;
  goodCount: number;
  badCount: number;
  isFavorite: boolean;
  onClick: (eventType: string, i: number) => void;
}

const useStyles = makeStyles({
  card: {
    marginBottom: '10px',
    minWidth: 320,
    maxWidth: 640
  },
  media: {
    height: 0,
    paddingTop: '56%'
  }
});

function Item(props: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        titleTypographyProps={{variant:'body1'}}
        subheaderTypographyProps={{variant:'body2'}}
        title={props.title}
        subheader={props.body}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="logo"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="thumb-up">
          <ThumbUpIcon
            onClick={(_: any) => props.onClick('good', props.index)}
          />
        </IconButton>
        <span>{props.goodCount}</span>
        <IconButton aria-label="thumb-down">
          <ThumbDownIcon
            onClick={(_: any) => props.onClick('bad', props.index)}
          />
        </IconButton>
        <span>{props.badCount}</span>
        <IconButton aria-label="favorite">
          {
            props.isFavorite 
              ? <StarIcon
                  onClick={(_: any) => props.onClick('favorite', props.index)}
                />
              : <StarBorderIcon
                  onClick={(_: any) => props.onClick('favorite', props.index)}
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

export default Item;
