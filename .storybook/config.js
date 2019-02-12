import { storiesOf, configure } from "@storybook/vue";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/vue';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Storybook Knobs', module).addDecorator(withKnobs);
storiesOf('Storybook Notes', module).addDecorator(withNotes);

const req = require.context("../src", true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
