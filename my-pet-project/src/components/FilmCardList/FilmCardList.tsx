import React from "react";
import styles from "./FilmCardList.module.css";
import btnStyles from "../Button/Button.module.css";
import { Film } from "../../types/film";
import FilmCard from "../FilmCard/FilmCard";
import Button from "../Button/Button";

type FilmCardListProps = {
  filmCards: Film[] | void;
  onButtonClick?: () => void;
  isLoadingSpinner?: boolean;
  classNameContainer?: string;
  classNameList?: string;
};

const FilmCardList: React.FC<FilmCardListProps> = ({
  filmCards,
  onButtonClick,
  isLoadingSpinner,
  classNameContainer,
  classNameList,
}) => {
  return (
    <main className={`${classNameContainer} ${styles.filmCardListContainer}`}>
      <div className={`${classNameList} ${styles.list}`}>
        {filmCards?.map((card) => (
          <FilmCard {...card} key={card.id} />
        ))}
      </div>
      <Button
        className={btnStyles.btnShow}
        onClick={onButtonClick}
        loadingSpinner={isLoadingSpinner}
      >
        {!isLoadingSpinner ? "Show more" : null}
      </Button>
    </main>
  );
};

export default FilmCardList;
