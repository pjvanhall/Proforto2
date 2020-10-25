import React from "react";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import { getAlbums } from "./queries";
import { AlbumsList } from "./AlbumsList";

const queryCache = new QueryCache();

export const AlbumsContainer = () => {
  const { data } = useQuery("albums", getAlbums);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AlbumsList albums={data?.feed.entry} />
    </ReactQueryCacheProvider>
  );
};
