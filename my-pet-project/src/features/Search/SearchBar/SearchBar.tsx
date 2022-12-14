import { Dropdown } from "./dropdown/Dropdown";
import styles from "./SearchBar.module.css";
import { ReactComponent as FilterIcon } from "../../../assets/filterIcon.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../searchSlice";
import { useState } from "react";

type SearchBarProps = {
  onClick: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.search.response ?? []);
  const searchInput = useAppSelector((state) => state.search.text);

  return (
    <div className={styles.container}>
      <input
        type="search"
        value={searchInput}
        placeholder="Search"
        onInput={(e) => {
          dispatch(actions.search({ text: e.currentTarget.value }));
        }}
        className={styles.input}
      ></input>
      {list.length > 0 ? (
        <div className={styles.dropdownContainer}>
          <Dropdown
            list={list}
            onSelectedItem={() => dispatch(actions.reset())}
          ></Dropdown>
        </div>
      ) : null}
      <FilterIcon className={styles.svg} onClick={onClick} />
      <div className={styles.dropdownContainer}>
        <Dropdown
          list={[]}
          onSelectedItem={() => dispatch(actions.reset())}
        ></Dropdown>
      </div>
    </div>
  );
};
