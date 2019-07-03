import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './DevDrawer.styles';

interface State {
  open: boolean;
  showDevButton: boolean;
}

interface Props extends WithStyles<typeof styles> {}

class DevDrawer extends React.Component<Props, State> {
  state: State = {
    open: false,
    showDevButton: false,
  };

  componentDidMount = () => {
    (window as any).devMode = () => this.setState({ showDevButton: !this.state.showDevButton });
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const { open, showDevButton } = this.state;

    return (
      <span>
        <Drawer onClose={this.toggleOpen} open={open}>
          {this.props.children}
        </Drawer>
        {showDevButton ? (
          <Button
            onClick={() => this.setState({ open: !open })}
            variant="contained"
            color="primary"
            className={classes.devButton}
          >
            Open Dev Drawer
          </Button>
        ) : null}
      </span>
    );
  }
}

export default withStyles(styles)(DevDrawer);
