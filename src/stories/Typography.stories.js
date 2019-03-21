import React from "react";
import { storiesOf } from "@storybook/react";
import { withPrettierSource } from "storybook-addon-prettier-source";

import Typography from "./Typography";

storiesOf("Typography", module)
  .addDecorator(story => <div className="pt-4 px-2">{story()}</div>)
  .add("All", () => <Typography />);

// Emphasis Variants

storiesOf("Typography/Emphasis", module)
  .addDecorator(story => <div className="pt-4 px-2">{story()}</div>)
  .add("Positive", () => <Typography emphasis={true} />)
  .add("Negative", () => (
    <Typography emphasis={true} className={"inverse bg-black px-4"} />
  ));

storiesOf("Typography/Variants", module)
  .addDecorator(story => <div className="pt-4 px-2">{story()}</div>)
  .add("h1, .h1", withPrettierSource()(() => <h1>H1 / Montserrat </h1>))
  .add("h2, .h2", withPrettierSource()(() => <h2>H2 / Montserrat </h2>))
  .add("h3, .h3", withPrettierSource()(() => <h3>H3 / Montserrat </h3>))
  .add("h3, .h3", withPrettierSource()(() => <h3>H3 / Montserrat </h3>))
  .add("h4, .h4", withPrettierSource()(() => <h4>H4 / Montserrat </h4>))
  .add("h5, .h5", withPrettierSource()(() => <h5>H5 / Montserrat </h5>))
  .add("h6, .h6", withPrettierSource()(() => <h6>H6 / Montserrat </h6>))
  .add(
    ".body-1",
    withPrettierSource()(() => (
      <p className="body-1">Body 1 / Montserrat Regular </p>
    ))
  )
  .add(
    ".body-2",
    withPrettierSource()(() => (
      <p className="body-2">Body 2 / Montserrat Regular </p>
    ))
  )
  .add(
    ".subtitle-1",
    withPrettierSource()(() => (
      <p className="subtitle-1">Subtitle 1 / Montserrat Regular </p>
    ))
  )
  .add(
    ".subtitle-2",
    withPrettierSource()(() => (
      <p className="subtitle-2">Subtitle 2 / Montserrat Medium </p>
    ))
  )
  .add(
    ".button",
    withPrettierSource()(() => (
      <p className="button">Button / Montserrat Medium </p>
    ))
  )
  .add(
    ".caption",
    withPrettierSource()(() => (
      <p className="caption">Caption / Montserrat Regular </p>
    ))
  )
  .add(
    ".overline",
    withPrettierSource()(() => (
      <p className="overline">Overline / Montserrat Regular </p>
    ))
  );
