import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Score from "../atoms/score/Score";
import "../../assets/styles/components/tables.scss";

const cell = (val, i) => {
  const props = i > 0 ? { align: "right" } : null;
  return <TableCell {...props}>{val}</TableCell>;
};

const TableA = (title, data, headers) => (
  <Card>
    <CardContent>
      {title && <h3 className="overline">{title}</h3>}

      <Table className="dim-table">
        {headers && (
          <TableHead>
            <TableRow>{headers.map((th, i) => cell(th, i))}</TableRow>
          </TableHead>
        )}

        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="td" scope="row" className="body-2">
                {row.name}
              </TableCell>
              <TableCell align="right">{Score(row.value, "s")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

TableA.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  headers: PropTypes.array
};

TableA.defaultProps = {
  headers: null
};
export default TableA;
