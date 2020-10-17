import React from "react";
import { useQuery } from "react-query";
import { getAlbums } from "./queries";
import { AlbumsList } from "./AlbumsList";

export const AlbumsContainer = () => {
  const { data } = useQuery("albums", getAlbums);

  return <AlbumsList albums={data?.feed.entry} />;
};
