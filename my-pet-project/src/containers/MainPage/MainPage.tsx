import React, { useEffect, useState } from "react";
import Template from "../../components/Templates/Template/Template";
import FilmCardList from "../../components/FilmCardList/FilmCardList";
import { Film } from "../../types/film";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { actions } from "../../features/films/filmsList/filmListSlice";
import SideBar from "../../components/SideBar/SideBar";
import { TabEnum } from "../../types";
import Settings from "../../components/Settings/Settings";
import { SortFilmsEnum } from "../../components/FilteringBar/types";

type MainPageProps = {};

const MainPage: React.FC<MainPageProps> = () => {
  const favoriteFilms = useAppSelector((state) => state.markedFilm);
  const filmsList = useAppSelector(
    (state) => state.filmList.allFilmsList.films
  );
  const [activeTab, setActiveTab] = useState(TabEnum.HOME);
  const {
    count,
    isFetching,
    yearFrom,
    yearTo,
    raitingFrom,
    raitingTo,
    country,
    genres,
  } = useAppSelector((state) => state.filmList.allFilmsList);
  const {
    trendedCount,
    trendedIsFetching,
    trendedCountry,
    trendedRaitingFrom,
    trendedRaitingTo,
    trendedYearFrom,
    trendedYearTo,
    trendedGenres,
  } = useAppSelector((state) => state.filmList.trendedFilms);

  const searchFilmList = useAppSelector((state) => state.search.response);
  const dispatch = useAppDispatch();
  const trendedFilmList = useAppSelector(
    (state) => state.filmList.trendedFilms.trendedFilms
  );

  const [sortingBy, setSortingBy] = useState<SortFilmsEnum>(
    SortFilmsEnum.Popularity
  );

  useEffect(() => {
    if (!isFetching) {
      dispatch(
        actions.getFilmsFetch({
          count: count,
          text: sortingBy,
          yearFrom: yearFrom,
          yearTo: yearTo,
          raitingFrom: raitingFrom,
          raitingTo: raitingTo,
          country: country,
          genres: genres,
        })
      );
    }
  }, [dispatch, count]);

  useEffect(() => {
    if (!trendedIsFetching) {
      dispatch(
        actions.getTrendedFilmsFetch({
          trendedCount: trendedCount,
          text: sortingBy,
          trendedYearFrom: trendedYearFrom,
          trendedYearTo: trendedYearTo,
          trendedRaitingFrom: trendedRaitingFrom,
          trendedRaitingTo: trendedRaitingTo,
          trendedCountry: trendedCountry,
          trendedGenres: trendedGenres,
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
        if (searchFilmList !== [] && searchFilmList !== null) {
          if (searchFilmList === []) {
            return filmsList;
          }
          return searchFilmList;
        }
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
    <Template
      onRatingClick={() => {
        setSortingBy(SortFilmsEnum.Popularity);
      }}
      onYearClick={() => {
        setSortingBy(SortFilmsEnum.Year);
      }}
    >
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
          onButtonClick={() => {
            if (activeTab === "Home") {
              dispatch(actions.fetchNextPage());
            } else {
              dispatch(actions.fetchTrendedNextPage());
            }
          }}
          isLoadingSpinner={isFetching}
        ></FilmCardList>
      )}
    </Template>
  );
};

export default MainPage;
