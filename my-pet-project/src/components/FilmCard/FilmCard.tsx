import styles from "./FilmCard.module.css";

type FilmCardProps = {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
  genres: string;
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
        <img src={image} alt={title} className={styles.poster} />
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
