import React from 'react';
import 'typeface-roboto';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';

interface AppState {
  started: boolean;
  count: number;
}

class App extends React.Component<{}, AppState> {

  timer: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      started: false,
      count: 10
    };
  }

  componentWillUnmount() {
    this.setState({
      started: false
    });
  }

  startTimer = () => {
    const count = this.state.count !== 0 ?
                  this.state.count : 10;

    this.setState({
      started: true,
      count
    });

    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      });

      if (this.timer && this.state.count === 0) {
        clearInterval(this.timer);
        this.setState({
          started: false
        });
      }
    }, 1000);
  }

  stopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({
        started: false
      });
    }
  }

  render() {
    const wrapStyle1 = {
      background: 'linear-gradient(to right bottom, #ffefba, #ffffff)'
    } as React.CSSProperties;

    const wrapStyle2 = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    } as React.CSSProperties;

    const typoStyle = {
      marginBottom: 50
    } as React.CSSProperties;

    const fabStyle1 = {
      width: 120,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white'
    } as React.CSSProperties;

    const fabStyle2 = {
      width: 120,
      background: 'linear-gradient(45deg, #2196F3 30%, #2196F3 90%)',
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white'
    } as React.CSSProperties;

    return (
      <div style={wrapStyle1}>
        <div style={wrapStyle2}>
          <Typography style={typoStyle} variant="h1">
            {this.state.count}
          </Typography>
          {
            !this.state.started ?
              <Fab 
                style={fabStyle1}
                variant="extended"
                size="large"
                onClick={this.startTimer}
              >
                <PlayArrowOutlinedIcon />
                Start
              </Fab>
            :
              <Fab
                style={fabStyle2}
                color="secondary"
                variant="extended"
                size="large"
                onClick={this.stopTimer}
              >
                <PauseOutlinedIcon/>
                Stop
              </Fab>
          }
        </div>
      </div>
    )
  }
}

export default App;
