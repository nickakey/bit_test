import { createStyles, Theme } from '@material-ui/core/styles';

/*
 *
 * This is a called "JSS" and it is material UI's preferred way of handling CSS in a JS application. 
 * https://cssinjs.org/?v=v10.0.0-alpha.17
 *
 *
 */

export default (theme: Theme) =>
  createStyles({
    iconImage: {
      width: '20px',
    },
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
    controls: {
      margin: theme.spacing(3),
    },
    exampleWrapper: {
      // position: 'relative',
      // height: 380,
    },
    radioGroup: {
      margin: theme.spacing(1, 0),
    },
    speedDial: {
      position: 'absolute',
      '&$directionUp, &$directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(3),
      },
      '&$directionDown, &$directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(3),
      },
    },
    directionUp: {},
    directionRight: {},
    directionDown: {},
    directionLeft: {},
  });
