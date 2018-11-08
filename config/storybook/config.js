/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, configure } from "@storybook/vue";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/vue';

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
storiesOf('Storybook Knobs', module).addDecorator(withKnobs);

const req = require.context("../../src/components", true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
