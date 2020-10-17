import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./albumsStyles.css";

const AlbumRenderer = ({ index, data, style }) => {
  const album = data?.[index];

  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {album?.["im:name"]?.label}
    </div>
  );
};

export const AlbumsList = ({ albums }) =>
  albums?.length ? (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={albums.length}
          itemSize={35}
          width={width}
          itemData={albums}
        >
          {AlbumRenderer}
        </List>
      )}
    </AutoSizer>
  ) : null;
