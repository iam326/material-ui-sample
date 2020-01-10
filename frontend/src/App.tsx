import React from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

interface AppState {
  isFavorite: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isFavorite: false
    }
    this.favorite = this.favorite.bind(this);
  }

  favorite(bool: boolean): void {
    this.setState({
      isFavorite: bool
    });
  }

  render() {
    return (
      <div>
        <Card style={{maxWidth: 275}}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello, Material-UI in React
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
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
