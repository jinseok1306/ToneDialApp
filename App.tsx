import React from 'react';
import RootRouter from './src/Router';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <RootRouter />
    </StoreProvider>    
  );
}

export default App;
