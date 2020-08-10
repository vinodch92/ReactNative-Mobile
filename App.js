import React from 'react';
import { Provider } from 'react-redux';
import config from './app/config';
import StorybookUIRoot from './storybook';
import { Songs } from './app/screens';

const App = () => {
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }
  return (
    <Provider store={config.store}>
      <Songs />
    </Provider>
  );
};

export default App;
