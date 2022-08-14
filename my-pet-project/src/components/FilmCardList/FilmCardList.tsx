import React from "react";
import styles from "./FilmCardList.module.css";
import btnStyles from "../Button/Button.module.css";
import { Film } from "../../types/film";
import FilmCard from "../FilmCard/FilmCard";
import Button from "../Button/Button";

type FilmCardListProps = {
  filmCards: Film[];
  onButtonClick: () => void;
};

const FilmCardList: React.FC<FilmCardListProps> = ({
  filmCards,
  onButtonClick,
}) => {
  return (
    <main className={styles.filmCardListContainer}>
      <div className={styles.list}>
        {filmCards.map((card) => (
          <FilmCard {...card} key={card.id} />
        ))}
      </div>
      <Button className={btnStyles.btnShow} onClick={onButtonClick}>
        Show more
      </Button>
    </main>
  );
};

export default FilmCardList;
