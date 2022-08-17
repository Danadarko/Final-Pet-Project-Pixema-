import React from "react";
import styles from "../FilteringBar/FilteringBar.module.css";
import { countryList } from "../FilteringBar/types";

type SelectProps = {
  countryList: typeof countryList;
  value: string;
  onChange: (e: any) => void;
};

const Select: React.FC<SelectProps> = ({ countryList, value, onChange }) => {
  return (
    <div className={styles.customSelect}>
      <select
        name="Select a country"
        className={styles.select}
        defaultValue=""
        onChange={onChange}
      >
        {Object.values(countryList).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
