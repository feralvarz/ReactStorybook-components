import React from "react";
import { storiesOf } from "@storybook/react";
import { withPrettierSource } from "storybook-addon-prettier-source";

import Score from "../components/atoms/score/Score";

storiesOf("Atoms", module)
  .addDecorator(story => <div className="pt-4 px-2">{story()}</div>)
  .add("Score", () => (
    <div>
      <div className="row">
        <div className="col-12">
          <span className="overline">Overview</span>
          <h4 className="mb-2">Score Component</h4>
          <p className="body-1">Import and use as function component.</p>

          <code className="d-block mb-2 emp-high">
            <i>fn </i>
            {"Score(value: number, size: string, color: string)"}
          </code>
          <code className="emp-primary body-1">
            {" "}
            {'Score(920, "l", "#28a745")'}{" "}
          </code>
        </div>
        <div className="col-md-6 mx-auto">
          <div className="row align-items-center">
            <div className="col-8">
              <p className="body-1 emp-high">Extra Large</p>
            </div>

            <div className="col text-right">{Score(560, "xl")}</div>
          </div>

          <div className="row align-items-center">
            <div className="col-8">
              <p className="body-1 emp-high">Large</p>
            </div>

            <div className="col text-right">{Score(920, "l", "#28a745")}</div>
          </div>

          <div className="row align-items-center">
            <div className="col-8">
              <p className="body-1 emp-high">Medium</p>
            </div>

            <div className="col text-right">{Score(500, "m", "#f7b931")}</div>
          </div>

          <div className="row align-items-center">
            <div className="col-8">
              <p className="body-1 emp-high">Small</p>
            </div>

            <div className="col text-right">{Score(130, "s", "#d94441")}</div>
          </div>
        </div>
      </div>
    </div>
  ));
