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
    dataKey: "im:name",
    type: "string"
  },
  {
    label: "Count",
    dataKey: "im:itemCount",
    type: "number"
  },
  {
    label: "Price",
    dataKey: "im:price",
    type: "string"
  },
  {
    label: "Image",
    dataKey: "im:image",
    type: "image"
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
            {column.type === "image" ? (
              <img src={album["im:image"][0].label} />
            ) : (
              album?.[column.dataKey]?.label
            )}
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

const getItemHeight = (index: number) => {
  return 75;
};

type Album = {
  Name: string;
};

type AlbumsListProps = { albums: [Album] };

export const AlbumsList = ({ albums }: AlbumsListProps) => {
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
      <AutoSizer>
        {({ height, width }) => (
          <div>
            <TableHead component="div">
              <Columns classes={classes} />
            </TableHead>
            <TableBody component="div">
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
            </TableBody>
          </div>
        )}
      </AutoSizer>
    </Table>
  ) : null;
};
