import React, { useRef } from "react";
import styles from "../../FilteringBar/FilteringBar.module.css";
import { ReactComponent as DeleteIcon } from "../../../assets/Icon-Cancel.svg";

type InputGenresProps = {
  genresListArray: string[];
  onKeyPress?: (e: any) => void;
  value?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteClick: (e: any) => void;
};

const InputGenres: React.FC<InputGenresProps> = ({
  onKeyPress,
  value,
  className,
  onChange,
  genresListArray,
  onDeleteClick,
}) => {
  const ref: any = useRef(null);

  const handleClick = () => {
    if (!ref.current) {
      return;
    } else {
      ref.current.focus();
    }
  };
  return (
    <>
      <h4 className={styles.rowTitle}>Genres</h4>
      <div className={styles.fakeTextarea} onClick={handleClick}>
        <ul className={styles.genresList}>
          {genresListArray
            ? genresListArray.map((genre, index) => (
                <li className={styles.genresItem} key={index} value={genre}>
                  {genre}
                  <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={onDeleteClick}
                  />
                </li>
              ))
            : null}
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            required={false}
            className={styles.genresInput}
          ></input>
        </ul>
      </div>
    </>
  );
};

export default InputGenres;
