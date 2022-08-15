import React from "react";
import { setMarkedFilm } from "./markedFilmSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import BookMark from "./BookMark";

type FilmsMarkedUnmarkedProps = {
  id: string | number;
};

const FilmsMarkedUnmarked: React.FC<FilmsMarkedUnmarkedProps> = ({ id }) => {
  const state = useAppSelector((state) => state.markedFilm[id] ?? false);
  const dispatch = useAppDispatch();

  return (
    <BookMark
      onClick={() => dispatch(setMarkedFilm({ id, state: !state }))}
      marked={state}
    />
  );
};

export default FilmsMarkedUnmarked;
