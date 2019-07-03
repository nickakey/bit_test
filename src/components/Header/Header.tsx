// ------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import * as React from 'react';
// ------------------------------------------------------------------------------
// Material UI Components ----------------------------------------------------------------
import { withStyles, WithStyles } from '@material-ui/core/styles';

// ------------------------------------------------------------------------------
// Local Components ----------------------------------------------------------------
import logoSvg from '../../assets/logo.svg';
import styles from './Header.styles';
// ----------------------------------------------------------------

interface Props extends WithStyles<typeof styles> {}

class Header extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.header}>
        <img src={logoSvg} className={classes.logo} alt="logo" />
        <h1 className="title">Welcome to React</h1>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
