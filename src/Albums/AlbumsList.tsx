import React from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  {
    label: "Name",
    dataKey: "im:name"
  },
  {
    label: "Count",
    dataKey: "im:itemCount"
  },
  {
    label: "Price",
    dataKey: "im:price"
  }
];

const useTableStyles = makeStyles((theme) => ({
  table: {
    height: "100%",
    width: "100%"
  },
  list: {},
  row: {
    display: "flex",
    flexDirection: "row"
  },
  cell: {
    flex: 1
  }
}));

const Row = ({ index, style, data: { columns, items, classes } }) => {
  const album = items[index];

  return (
    <TableRow component="div" className={classes.row} style={style}>
      {columns.map((column, index) => {
        return (
          <TableCell component="div" key={index} className={classes.cell}>
            {album?.[column.dataKey]?.label}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const Columns = ({ classes }) => {
  return (
    <TableRow component="div" className={classes.row}>
      {columns.map((column, index) => (
        <TableCell component="div" key={index} className={classes.cell}>
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};

const getItemHeight = (index) => {
  console.log(index);
  return 50;
};

export const AlbumsList = ({ albums }) => {
  const classes = useTableStyles();
  const itemData = {
    columns,
    classes,
    items: albums
  };

  return albums?.length ? (
    <Table
      component="div"
      className={classes.table}
      stickyHeader
      aria-label="albums table"
    >
      <TableHead component="div">
        <Columns classes={classes} />
      </TableHead>
      <TableBody component="div">
        <AutoSizer>
          {({ height, width }) => (
            <List
              className={classes.list}
              height={height}
              width={width}
              itemCount={albums.length}
              itemSize={getItemHeight}
              itemData={itemData}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </TableBody>
    </Table>
  ) : null;
};
