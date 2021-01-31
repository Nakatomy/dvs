import styles from "./style.module.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const LanguageSwitcher = ({ className }) => {
  const GlobalCss = withStyles({
    "@global": {
      ".MuiInput-underline:before": {
        content: "inherit",
      },
      ".MuiInput-underline:after": {
        content: "inherit",
      },
      ".MuiSelect-icon": {
        color: "rgba(0, 0, 0, 0)",
      },
    },
  })(() => null);
  
  const { i18n } = useTranslation();
  return (
    <li className={className}>
      <FormControl>
        <GlobalCss />
        <Select
          value={i18n.language}
          className={styles[`icon--${i18n.language}-selected-flag`]}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <MenuItem value="en">
            <span className={styles["icon--en-flag"]}></span>
          </MenuItem>
          <MenuItem value="de">
            <span className={styles["icon--de-flag"]}></span>
          </MenuItem>
        </Select>
      </FormControl>
    </li>
  );
};

export default LanguageSwitcher
