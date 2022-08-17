import React, { useState } from "react";
import styles from "./FilteringBar.module.css";
import btnStyles from "../Button/Button.module.css";
import inputStyles from "../Inputs/Input/Input.module.css";
import { ReactComponent as CancelIcon } from "../../assets/Icon-Cancel.svg";
import FilteringSection from "./FilteringSection/FilteringSection";
import Button from "../Button/Button";
import Input from "../Inputs/Input/Input";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-interface.svg";
import { ReactComponent as Line } from "../../assets/line.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { countryList, SortFilmsEnum } from "./types";
import { actions } from "../../features/films/filmsList/filmListSlice";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import Select from "../Select/Select";

type FilteringBarProps = {
  clasName?: string;
  onCancelClick: () => void;
  onRatingClick: () => void;
  onYearClick: () => void;
};

const FilteringBar: React.FC<FilteringBarProps> = ({
  clasName,
  onCancelClick,
  onRatingClick,
  onYearClick,
}) => {
  const [inputText, setInputText] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [raitingFrom, setRaitingFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [raitingTo, setRaitingTo] = useState("");
  const countryListArr = Object.values(countryList);
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useAppDispatch();
  const { count, isFetching } = useAppSelector(
    (state) => state.filmList.allFilmsList
  );
  const [sortingBy, setSortingBy] = useState<SortFilmsEnum>(
    SortFilmsEnum.Popularity
  );

  return (
    <form
      className={`${clasName} ${styles.container}`}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          actions.getFilmsFetch({
            count: count,
            text: sortingBy,
            yearFrom: yearFrom,
            yearTo: yearTo,
            raitingFrom: raitingFrom,
            raitingTo: raitingTo,
            country: selectedOption,
          })
        );
        console.log("gone");
      }}
    >
      <div className={styles.titleGroup}>
        <h2 className={styles.title}>Filters</h2>
        <CancelIcon onClick={onCancelClick} className={styles.svg} />
      </div>
      <div className={styles.content}>
        <FilteringSection title="Sort by">
          <div className={styles.btnGroup}>
            <Button
              className={btnStyles.filterBtn}
              onClick={() => {
                setSortingBy(SortFilmsEnum.Popularity);
              }}
            >
              Rating
            </Button>
            <Button
              className={btnStyles.filterBtn}
              onClick={() => {
                setSortingBy(SortFilmsEnum.Year);
              }}
            >
              Year
            </Button>
          </div>
        </FilteringSection>
        <Line className={styles.line}></Line>
        <Input
          title="Full or short movie name"
          type="text"
          placeholder="Your text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          required={false}
        />
        <FilteringSection title="Genre">
          <textarea className={styles.textarea}></textarea>
        </FilteringSection>

        <FilteringSection title="Years">
          <div className={styles.inputGroup}>
            <Input
              type="text"
              placeholder="from"
              onChange={(e) => setYearFrom(e.target.value)}
              value={yearFrom}
              className={inputStyles.inputFilter}
              required={false}
            />
            <Input
              type="text"
              placeholder="to"
              onChange={(e) => setYearTo(e.target.value)}
              value={yearTo}
              className={inputStyles.inputFilter}
              required={false}
            />
          </div>
        </FilteringSection>
        <FilteringSection title="Rating">
          <div className={styles.inputGroup}>
            <Input
              type="text"
              placeholder="from"
              onChange={(e) => setRaitingFrom(e.target.value)}
              value={raitingFrom}
              className={inputStyles.inputFilter}
              required={false}
            />
            <Input
              type="text"
              placeholder="to"
              onChange={(e) => setRaitingTo(e.target.value)}
              value={raitingTo}
              className={inputStyles.inputFilter}
              required={false}
            />
          </div>
        </FilteringSection>
        <FilteringSection title="Country">
          <Select
            countryList={countryList}
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.currentTarget.value);
            }}
          />
        </FilteringSection>
      </div>

      <div className={styles.btnSubmitGroup}>
        <Button type="reset" className={btnStyles.btnSubmit}>
          Clear filter
        </Button>

        <Button type="submit" className={btnStyles.btnSubmit}>
          Show results
        </Button>
      </div>
    </form>
  );
};
export default FilteringBar;
