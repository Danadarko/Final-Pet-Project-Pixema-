import styles from "./Dropdown.module.css";

type DropdownProps = {
  // list: Post[];
  onSelectedItem: (id: string | number) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ onSelectedItem }) => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <img src="" className={styles.img} alt="" />
      </li>
    </ul>
  );
};
