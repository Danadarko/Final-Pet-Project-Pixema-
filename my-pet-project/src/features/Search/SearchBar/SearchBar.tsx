import { Dropdown } from "./dropdown/Dropdown";
import styles from "./SearchBar.module.css";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Search"
        onInput={(e) => {}}
        className={styles.input}
      ></input>

      <div className={styles.dropdownContainer}>
        <Dropdown onSelectedItem={() => {}}></Dropdown>
      </div>
    </div>
  );
};
