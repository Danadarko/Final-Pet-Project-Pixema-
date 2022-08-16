import { Link } from "react-router-dom";
import { AppPages } from "../../../../types";
import { Film } from "../../../../types/film";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  list: Film[];
  onSelectedItem: (id: string | number) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ onSelectedItem, list }) => {
  return (
    <ul className={styles.ul}>
      {list.map((item) => (
        <Link
          to={`${AppPages.All_FILMS}/${item.id}`}
          key={item.id}
          onClick={() => onSelectedItem(item.id)}
        >
          <li className={styles.li}>
            <img src={item.image} className={styles.img} alt={item.title} />
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};
