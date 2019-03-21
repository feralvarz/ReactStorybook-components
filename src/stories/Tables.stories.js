import React from "react";
import { storiesOf } from "@storybook/react";
import TableA from "../components/molecules/Table-a";

let id = 0;
function makeData(name, value) {
  id += 1;
  return { id, name, value };
}

const rows = [
  makeData("Design", "520th"),
  makeData("Mobile", "263th"),
  makeData("Performance", "324th"),
  makeData("SEO", "63th"),
  makeData("User Tools", "985th")
];
const headers = ["Name", "Rank"];

storiesOf("Tables", module)
  .addDecorator(story => (
    <div className="pt-4 px-2">
      <div className="row col-md-4">{story()}</div>
    </div>
  ))
  .add("Table A", () => TableA("Ranking in Industry", rows));
