import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { store, persistor } from './store';
import Routes from './routes';

import theme from './views/_layouts/theme';
import GlobalStyle from './styles/globalStyle';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
