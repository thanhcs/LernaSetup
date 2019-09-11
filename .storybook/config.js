import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';

const req = require.context('../packages', true, /.story.tsx?$/);

const muiThemeDecorator = (story) => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  );

  const styles = {
    textAlign: 'center',
  };
  const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

function loadStories() {
    addDecorator(withKnobs);
    // addDecorator(CenterDecorator);
    addDecorator(muiThemeDecorator);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
