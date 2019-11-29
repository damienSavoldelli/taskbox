import { configure } from '@storybook/react';


import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import requireContext from 'require-context.macro';
import 'storybook-chromatic';

import '../src/index.css';

const req = requireContext('../src/__STORIES__', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

configure(loadStories, module);