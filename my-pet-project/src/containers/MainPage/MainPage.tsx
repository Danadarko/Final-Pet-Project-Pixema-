import React, { useEffect, useRef, useState } from "react";
import Template from "../../components/Templates/Template/Template";
import FilmCardList from "../../components/FilmCardList/FilmCardList";
import { Film } from "../../types/film";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { actions } from "../../features/films/filmsList/filmListSlice";

type MainPageProps = {};

const MainPage: React.FC<MainPageProps> = () => {
  const filmsList = useAppSelector((state) => state.filmList.films);

  const hasFetchedData = useRef(false);
  const { count, isFetching } = useAppSelector((state) => state.filmList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    /*async function fetchData() {
      const response = await fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_3ws77ve9?title_type=feature&count=10"
      );
      const { results } = await response.json();
      console.log(results);
      setFilms(results);
    }
    if (hasFetchedData.current === false) {
      fetchData();
      hasFetchedData.current = true;
    }*/
    if (!isFetching) {
      dispatch(
        actions.getFilmsFetch({
          count: count,
        })
      );

      console.log("getPosts");
    }
  }, [dispatch, count]);

  /*const scrollHandler = (e: any): void => {
    if (
      e.currentTarget.documentElement.scrollHeight -
        (e.currentTarget.documentElement.scrollTop + window.innerHeight) <
      60
    ) {
      dispatch(actions.fetchNextPage());
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });*/

  return (
    <Template>
      <FilmCardList
        filmCards={filmsList}
        onButtonClick={() => dispatch(actions.fetchNextPage())}
      ></FilmCardList>
    </Template>
  );
};

export default MainPage;
