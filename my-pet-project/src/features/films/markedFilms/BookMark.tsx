import { ReactComponent as FavoriteIcon } from "../../../assets/favoritesIcon.svg";
import styles from "./Bookmark.module.css";

type BookmarkProps = {
  onClick: () => void;
  marked: boolean | null;
};
const BookMark: React.FC<BookmarkProps> = ({ onClick, marked }) => {
  return (
    <FavoriteIcon
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      role="button"
      className={marked ? styles.iconMarked : styles.icon}
    />
  );
};
export default BookMark;
