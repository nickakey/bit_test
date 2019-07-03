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
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },

    catFact: {
      padding: '.4em',
      margin: '.4em',
      border: `solid ${theme.palette.primary.main} 1px`,
    },
    home: {
      padding: '1em',
    },
    incrementContainer: {
      display: 'flex',
      margin: '1em',
      alignItems: 'center',

      '& > *': {
        // https://github.com/cssinjs/jss-nested
        margin: '0em 1em',
      },
    },
    catFactsContainer: {
      margin: '1em',
    },
    description: {
      margin: '1em',
    },
  });
