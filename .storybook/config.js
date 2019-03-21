import "../src/assets/styles/main.scss";
import { configure, addDecorator } from "@storybook/react";

import requireContext from "require-context.macro";

// const req = require.context("../src", true, /.stories.js$/);
const req = requireContext("../src/stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
