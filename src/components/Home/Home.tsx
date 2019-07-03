// ------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ------------------------------------------------------------------------------
// Material UI Components ----------------------------------------------------------------
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HighlightIcon from '@material-ui/icons/Highlight';

// ------------------------------------------------------------------------------
// Local Components ----------------------------------------------------------------
import increment from '../../Redux/actions/increment';
import SpeedDial from '../SpeedDial/SpeedDial';
import Drawer from '../DevDrawer/DevDrawer';

import fetchCatFacts from '../../Redux/actions/fetchCatFacts';
import styles from './Home.styles';
import { defaultState } from '../../Redux/store';
import { CatFactType } from 'src/types';
// ----------------------------------------------------------------

interface Props extends WithStyles<typeof styles> {
  increment: typeof increment;
  fetchCatFacts: typeof fetchCatFacts;
  count: Number;
  error: any;
  isFetching: boolean;
  catFacts: CatFactType[];
}

class Home extends React.Component<Props, {}> {
  state = {
    dark: false,
  };

  handleDarkModeClick = () => this.setState({ dark: !this.state.dark });

  componentDidMount = () => {
    this.props.fetchCatFacts();
  };

  render() {
    const { increment, count, error, isFetching, catFacts, classes } = this.props;
    const { dark } = this.state;

    const theme = createMuiTheme({
      palette: {
        type: dark ? 'dark' : undefined,
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <Drawer>
          <div className={classes.list} role="presentation">
            <List>
              <ListItem button onClick={this.handleDarkModeClick} key={'dark'}>
                <ListItemIcon>{<HighlightIcon />}</ListItemIcon>
                <ListItemText primary={'Dark Mode'} />
              </ListItem>
              {[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <Paper className={classes.home}>
          <Typography variant="h5">What is this?</Typography>
          <Typography className={classes.description}>
            This is a starter repo utilizing, React, Typescript, Redux, Thunk, Material UI, and JSS. Specifically, it
            uses best practice for styling, handling asynchronous requests, loading, and error handling. Basically, it
            gives you examples on how to do stuff that would take a LONG time to figure out the hard way. Try and follow
            all the existing patterns in this repo, and your code base will be much better!
          </Typography>
          <Typography className={classes.description}>
            The logic for "Incrementer" is very simple synchronous Redux. The logic for "Cat Facts" is a little more
            complex, and will show you how to handle loading, error handling, and asynchronous requests.
          </Typography>
          {/* 
          <Divider />

          <Typography variant="h5">Incrementer</Typography>
          <div className={classes.incrementContainer}>
            <Typography>Count is: {count}</Typography>
            <Button variant="contained" color="primary" onClick={() => increment()}>
              Increment
            </Button>
          </div> */}

          <Divider />

          <Typography variant="h5">Cat Facts</Typography>
          <div className={classes.catFactsContainer}>
            {error ? <div>Error: {JSON.stringify(error)} Please reload to try again....</div> : null}

            {isFetching ? <div>Loading...</div> : null}

            {catFacts.map((catFact) => (
              <div className={classes.catFact} key={catFact.id}>
                <div>Fact: {catFact.text}</div>
                <div>upvotes: {catFact.upvotes}</div>
              </div>
            ))}
          </div>
          <SpeedDial />
        </Paper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: typeof defaultState) => {
  const { count, error, isFetching, catFacts } = state.catFactsReducer;

  return {
    count,
    error,
    isFetching,
    catFacts,
  };
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ increment, fetchCatFacts }, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));
