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
    devButton: {
      position: 'fixed',
      bottom: 20,
      left: 20,
      backgroundColor: 'black',
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
