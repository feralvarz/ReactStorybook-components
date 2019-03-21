import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

// B&W Colors

const bwPalette = {
  white: "#fff",
  100: "#f7f8fa",
  200: "#dcdce0",
  300: "#9c9ca1",
  400: "#626366",
  black: "#1d1d1f"
};

// Colors
const colorPalette = {
  blue: "#1e88e5",
  purple: "#5948c6",
  pink: "#e14c90",
  rose: "#db79d7",
  red: "#d94441",
  orange: "#ff743d",
  yellow: "#f7b931",
  yellowGreen: "#a7c23a",
  green: "#3eb045",
  teal: "#26babc"
};

// Scale Colors
const scale = [
  colorPalette.red,
  colorPalette.orange,
  colorPalette.yellow,
  colorPalette.yellowGreen,
  colorPalette.green
];

const category = [
  colorPalette.teal,
  colorPalette.blue,
  colorPalette.purple,
  colorPalette.rose,
  colorPalette.pink
];

const bw = [
  bwPalette.black,
  bwPalette[400],
  bwPalette[300],
  bwPalette[200],
  bwPalette[100]
];

const colorName = (value, obj) =>
  Object.keys(obj).find(key => obj[key] === value);

const ColorsTile = (hex, colorObject) => (
  <div className="col">
    <Card>
      <CardActionArea>
        <CardContent>
          <div
            style={{
              width: "100%",
              height: 150,
              backgroundColor: hex,
              marginBottom: 16
            }}
          />
          <p className="overline">{colorName(hex, colorObject)}</p>
          <code>{hex}</code>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
);

const ColorsDemo = () => (
  <div>
    <div className="row mb-8">
      <div className="col-12">
        <span className="overline">Overview</span>
        <h4 className="mb-2">Colors</h4>
      </div>
    </div>

    <div className="row mb-8">
      <div className="col-12">
        <h6>Gray Colors</h6>
      </div>
      {bw.map(color => ColorsTile(color, bwPalette))}
    </div>

    <div className="row mb-8">
      <div className="col-12">
        <h6>Scale Colors</h6>
      </div>
      {scale.map(color => ColorsTile(color, colorPalette))}
    </div>

    <div className="row mb-8">
      <div className="col-12">
        <h6>Category Colors</h6>
      </div>
      {category.map(color => ColorsTile(color, colorPalette))}
    </div>
  </div>
);

export default ColorsDemo;
