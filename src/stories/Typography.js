import React from "react";

const basic = (
  <div>
    <div className="row mb-4">
      <div className="col-12">
        <span className="overline">Overview</span>
        <h4 className="mb-2">Typography</h4>
      </div>
      <div className="col-lg-10 mx-auto">
        <h1>Hello, World.</h1>
        <h2>An Adaptable Foundation</h2>

        <div className="row">
          <div className="col-lg-4">
            <p className="overline">Overline</p>
            <h6>Headline 6</h6>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half...
            </p>
          </div>

          <div className="col-lg-4">
            <h4>Headline 4</h4>
            <h5>Headline 5</h5>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half...
            </p>
          </div>

          <div className="col-lg-4">
            <p>Body 1</p>
            <p className="caption">Caption</p>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> //end
);

const variants = restProps => (
  <div {...restProps}>
    <div className="row">
      <div className="col-12">
        <span className="overline">Overview</span>
        <h4 className="mb-2">Emphasis</h4>
        <p className="body-1 mb-8">
          Use {""}
          <code className="mark">
            .emp-[high, medium, disabled, primary]
          </code>{" "}
          directly in elements or in parents to modify all at once.
          <br />
          <code className="emp-primary">
            {`<p className="emp-primary">Some text...</p>`}
          </code>
        </p>
      </div>
      <div className="col-md-8 mx-auto emp-high">
        <h4 className="text-center">Black / High Emphasis/ Center</h4>
        <h4>Black / High Emphasis/ Left</h4>
        <h4 className="text-right">Black / High Emphasis / Right</h4>
      </div>
    </div>

    <div className="row pt-6">
      <div className="col-md-8 mx-auto emp-medium">
        <h4 className="text-center">Black / Medium Emphasis/ Center</h4>
        <h4>Black / Medium Emphasis/ Left</h4>
        <h4 className="text-right">Black / Medium Emphasis / Right</h4>
      </div>
    </div>

    <div className="row pt-6">
      <div className="col-md-8 mx-auto emp-disabled">
        <h4 className="text-center">Black / Disabled / Center</h4>
        <h4>Black / Disabled / Left</h4>
        <h4 className="text-right">Black / Disabled / Right</h4>
      </div>
    </div>

    <div className="row pt-6">
      <div className="col-md-8 mx-auto emp-primary">
        <h4 className="text-center">Primary / Center</h4>
        <h4>Primary / Left</h4>
        <h4 className="text-right">Primary / Right</h4>
      </div>
    </div>
  </div>
);
function Typography({ emphasis, ...restProps }) {
  return emphasis === undefined ? basic : variants(restProps);
}

export default Typography;
