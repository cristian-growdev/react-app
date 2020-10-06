import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#451a75',
    },
    secondary: {
      main: '#fcc11c',
    },
    background: {
      MuiCard: '#1cfcf5',
    },
  },
  overrides: {
    MuiButton: {
      text: {
        color: 'red',
      },
      outlined: {
        border: '1px solid #1cfcf5',
        borderRadius: 3,
        height: 50,
      },
    },
    MuiList: {
      root: {
        backgroundColor: '#870000',
      },
    },
  },
});
