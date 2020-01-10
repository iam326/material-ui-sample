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
import logo from './logo.svg';

interface AppState {
  goodCount: number,
  badCount: number,
  isFavorite: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
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

  favorite(bool: boolean): void {
    this.setState({
      isFavorite: bool
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
      <div>
        <Card style={{paddingTop: '10px', maxWidth: 275}}>
          <CardMedia
            style={{ height: 0, paddingTop: '56%'}}
            image={logo}
            title="logo"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello, Material-UI in React
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
                  ? <StarIcon onClick={(_) => this.favorite(false)} />
                  : <StarBorderIcon onClick={(_) => this.favorite(true)} />
              }
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default App;
