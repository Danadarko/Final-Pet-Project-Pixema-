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

type FilteringBarProps = {
  clasName?: string;
  onCancelClick: () => void;
};

const FilteringBar: React.FC<FilteringBarProps> = ({
  clasName,
  onCancelClick,
}) => {
  const [inputText, setInputText] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className={`${clasName} ${styles.container}`}>
      <div className={styles.titleGroup}>
        <h2 className={styles.title}>Filters</h2>
        <CancelIcon onClick={onCancelClick} className={styles.svg} />
      </div>
      <div className={styles.content}>
        <FilteringSection title="Sort by">
          <div className={styles.btnGroup}>
            <Button className={btnStyles.filterBtn}>Rating</Button>
            <Button className={btnStyles.filterBtn}>Year</Button>
          </div>
        </FilteringSection>
        <Line className={styles.line}></Line>
        <Input
          title="Full or short movie name"
          type="text"
          placeholder="Your text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <FilteringSection title="Genre">
          <textarea className={styles.textarea}></textarea>
        </FilteringSection>

        <FilteringSection title="Years">
          <div className={styles.inputGroup}>
            <Input
              type="text"
              placeholder="from"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className={inputStyles.inputFilter}
            />
            <Input
              type="text"
              placeholder="to"
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className={inputStyles.inputFilter}
            />
          </div>
        </FilteringSection>
        <FilteringSection title="Rating">
          <div className={styles.inputGroup}>
            <Input
              type="text"
              placeholder="from"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className={inputStyles.inputFilter}
            />
            <Input
              type="text"
              placeholder="to"
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className={inputStyles.inputFilter}
            />
          </div>
        </FilteringSection>
        <FilteringSection title="Country">
          <div className={styles.customSelect}>
            <select name="Select a country" className={styles.select}></select>
          </div>
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
    </div>
  );
};
export default FilteringBar;
