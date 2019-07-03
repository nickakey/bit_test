import * as React from 'react';
import clsx from 'clsx';
import { capitalize } from '@material-ui/core/utils';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from './SpeedDial.styles';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

interface State {
  open: boolean;
}

interface Props extends WithStyles<typeof styles> {}

class SpeedDials extends React.Component<Props, State> {
  state: State = {
    open: false,
  };

  handleClick = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const speedDialClassName = clsx(classes.speedDial, classes[`direction${capitalize('up')}`]);

    return (
      <div className={classes.root}>
        <div className={classes.exampleWrapper}>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={speedDialClassName}
            icon={<SpeedDialIcon />}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={this.handleOpen}
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={open}
            direction={'up'}
          >
            {actions.map((action, i) => (
              <SpeedDialAction
                key={action.name}
                icon={
                  i === 2 ? (
                    <img className={classes.iconImage} src="https://image.flaticon.com/icons/png/512/55/55421.png" />
                  ) : (
                    action.icon
                  )
                }
                tooltipTitle={action.name}
                onClick={this.handleClick}
              />
            ))}
          </SpeedDial>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SpeedDials);
