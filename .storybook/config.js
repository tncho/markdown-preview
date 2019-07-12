import { configure, addParameters } from "@storybook/react";
import { create } from '@storybook/theming';
const req = require.context("../src/components", true, /.stories.tsx$/);

/* Setting dark mode just for my own sake ^^ */
const theme = create({ base: 'dark', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD' });
addParameters({ options: { theme } });

function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
