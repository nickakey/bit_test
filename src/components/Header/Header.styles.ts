import { createStyles } from '@material-ui/core/styles';

/*
 *
 * This is a called "JSS" and it is material UI's preferred way of handling CSS in a JS application. 
 * https://cssinjs.org/?v=v10.0.0-alpha.17
 *
 *
 */

export default createStyles({
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80,
  },

  header: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white',
  },
});
