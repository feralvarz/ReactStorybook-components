import React from "react";
import { storiesOf } from "@storybook/react";
import ColorsDemo from "./Colors";

storiesOf("Colors", module)
  .addDecorator(story => <div className="pt-4 px-2">{story()}</div>)
  .add("Overview", () => <ColorsDemo />);
