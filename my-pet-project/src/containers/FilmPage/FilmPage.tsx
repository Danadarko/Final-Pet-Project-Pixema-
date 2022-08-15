import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Sidebar from "../../components/SideBar/SideBar";
import Template from "../../components/Templates/Template/Template";
import { TabEnum } from "../../types";
import styles from "./FilmPage.module.css";
import btnStyles from "../../components/Button/Button.module.css";
import cardListStyles from "../../components/FilmCardList/FilmCardList.module.css";
import { ReactComponent as ImdbIcon } from "../../assets/imdbIcon.svg";
import { ReactComponent as Circles } from "../../assets/Bookmark.svg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import FilmCardList from "../../components/FilmCardList/FilmCardList";
import { useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import FilmsMarkedUnmarked from "../../features/films/markedFilms/posts-marked-unmarked";

type FilmPageProps = {};

const FilmPage: React.FC<FilmPageProps> = () => {
  const [activeTab, setActiveTab] = useState(TabEnum.HOME);
  const TABS_LIST = Object.values(TabEnum);

  const params = useParams();
  const filmList = useAppSelector((state) => state.filmList.allFilmsList.films);
  const trendedFilmList = useAppSelector(
    (state) => state.filmList.trendedFilms.trendedFilms
  );
  const filmListAll = [...filmList, ...trendedFilmList];

  const film = filmListAll.find((film) => film.id === String(params.filmId));
  const genresArr = film?.genres.split(",");
  if (!film) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <Template>
      <Sidebar
        tabs={TABS_LIST}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      ></Sidebar>
      <main className={styles.container}>
        <section className={styles.filmInfo}>
          <div className={styles.imageContent}>
            <div className={styles.imageContainer}>
              <img
                src={film.image}
                alt={film.fullTitle}
                className={styles.img}
              />
            </div>
            <div className={styles.imageFeatures}>
              <Button className={btnStyles.btnFeatures}>
                <FilmsMarkedUnmarked id={film.id} />
              </Button>
              <Button className={btnStyles.btnFeatures}>
                <Circles />
              </Button>
            </div>
          </div>
          <div className={styles.infoContent}>
            <ul className={styles.genresList}>
              {genresArr?.map((genre) => (
                <li className={styles.genresItem}>{genre}</li>
              ))}
            </ul>
            <h3 className={styles.title}>{film.title}</h3>
            <div className={styles.raitingContainer}>
              <p
                className={
                  Number(film.imDbRating) < 5
                    ? styles.raiting
                    : Number(film.imDbRating) < 7
                    ? styles.raitingYellow
                    : styles.raitingGreen
                }
              >
                {film.imDbRating}
              </p>

              <p className={styles.imdbContainer}>
                <ImdbIcon className={styles.icon} />
                {film.imDbRating}
              </p>

              <p className={styles.imdbContainer}>{film.runtimeStr}</p>
            </div>
            <p className={styles.plot}>{film.plot}</p>
            <div className={styles.additionalInfoSection}>
              <p>Year</p>
              <p className={styles.additionalInfoContent}>{film.description}</p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Released</p>
              <p className={styles.additionalInfoContent}></p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Box Office</p>
              <p className={styles.additionalInfoContent}></p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Country</p>
              <p className={styles.additionalInfoContent}></p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Production</p>
              <p className={styles.additionalInfoContent}></p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Actors</p>
              <p className={styles.additionalInfoContent}>{film.stars}</p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Director</p>
              <p className={styles.additionalInfoContent}>
                {film.stars.split(",")[1]}
              </p>
            </div>
            <div className={styles.additionalInfoSection}>
              <p>Writers</p>
              <p className={styles.additionalInfoContent}>
                {film.stars.split(",").reverse().join(",")}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.recommendations}>
          <div className={styles.recommendHead}>
            <h4 className={styles.recommendTitle}>Recommendations</h4>
            <div className={styles.sliderArrows}>
              <LeftArrow />
              <RightArrow />
            </div>
          </div>
          <FilmCardList
            filmCards={filmList}
            classNameContainer={cardListStyles.recommendationsContainer}
            classNameList={cardListStyles.listRecommendations}
          />
        </section>
      </main>
    </Template>
  );
};

export default FilmPage;
