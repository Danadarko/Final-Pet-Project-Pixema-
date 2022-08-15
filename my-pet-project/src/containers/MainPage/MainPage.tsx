import React, { useEffect, useState } from "react";
import Template from "../../components/Templates/Template/Template";
import FilmCardList from "../../components/FilmCardList/FilmCardList";
import { Film } from "../../types/film";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { actions } from "../../features/films/filmsList/filmListSlice";
import SideBar from "../../components/SideBar/SideBar";
import { TabEnum } from "../../types";
import Settings from "../../components/Settings/Settings";

type MainPageProps = {};

const MainPage: React.FC<MainPageProps> = () => {
  const favoriteFilms = useAppSelector((state) => state.markedFilm);
  const filmsList = useAppSelector(
    (state) => state.filmList.allFilmsList.films
  );
  const [activeTab, setActiveTab] = useState(TabEnum.HOME);
  const { count, isFetching } = useAppSelector(
    (state) => state.filmList.allFilmsList
  );
  const { trendedCount, trendedIsFetching } = useAppSelector(
    (state) => state.filmList.trendedFilms
  );
  const dispatch = useAppDispatch();
  const trendedFilmList = useAppSelector(
    (state) => state.filmList.trendedFilms.trendedFilms
  );

  useEffect(() => {
    if (!isFetching) {
      dispatch(
        actions.getFilmsFetch({
          count: count,
        })
      );
    }
  }, [dispatch, count]);

  useEffect(() => {
    if (!trendedIsFetching) {
      dispatch(
        actions.getTrendedFilmsFetch({
          count: trendedCount,
        })
      );
    }
  }, [dispatch, trendedCount]);

  const TABS_LIST = Object.values(TabEnum);
  const filterFilmsByFavourite = (film: Film) => favoriteFilms[film.id];
  const getActiveTabFilms = (
    activeTab: TabEnum,
    filmsList: Film[],
    trendedFilmList: Film[]
  ): Film[] | void => {
    switch (activeTab) {
      case TabEnum.HOME:
        return filmsList;
      case TabEnum.TRENDS:
        return trendedFilmList;
      case TabEnum.FAVORITES:
        const filmList = [...filmsList, ...trendedFilmList];
        return filmList.filter(filterFilmsByFavourite);
      case TabEnum.SETTINGS:
        return;
    }
  };

  return (
    <Template>
      <SideBar
        tabs={TABS_LIST}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      ></SideBar>
      {activeTab === TabEnum.SETTINGS ? (
        <Settings />
      ) : (
        <FilmCardList
          filmCards={getActiveTabFilms(activeTab, filmsList, trendedFilmList)}
          onButtonClick={() => dispatch(actions.fetchTrendedNextPage())}
          isLoadingSpinner={isFetching}
        ></FilmCardList>
      )}
    </Template>
  );
};

export default MainPage;
