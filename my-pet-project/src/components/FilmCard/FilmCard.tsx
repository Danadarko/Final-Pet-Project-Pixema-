import { Link } from "react-router-dom";
import FilmsMarkedUnmarked from "../../features/films/markedFilms/posts-marked-unmarked";
import { AppPages } from "../../types";
import Button from "../Button/Button";
import styles from "./FilmCard.module.css";

type FilmCardProps = {
  id: string;
  imDbRatingVotes: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  description: string;
  genres: string;
  plot: string;
  stars: string;
  runtimeStr: string;
};

const FilmCard: React.FC<FilmCardProps> = ({
  title,
  image,
  imDbRating,
  id,
  genres,
}) => {
  const genresArray = genres.split(",");
  console.log(imDbRating);
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        {imDbRating == null ? null : (
          <p
            className={
              Number(imDbRating) < 5
                ? styles.raiting
                : Number(imDbRating) < 7
                ? styles.raitingYellow
                : styles.raitingGreen
            }
          >
            {imDbRating}
          </p>
        )}
        <Link to={`${AppPages.All_FILMS}/${id}`} className={styles.link}>
          <img src={image} alt={title} className={styles.poster} />
        </Link>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.text}>
        {genresArray.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </article>
  );
};
export default FilmCard;
