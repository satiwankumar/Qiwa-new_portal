import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ar"; // Import the Arabic locale for Day.js
import "dayjs/locale/en"; // Import the English locale for Day.js
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
// Set the locale for Day.js to Arabic

function CustomDatePicker({ direction }) {
  // Determine the locale and format based on the direction
  const [locale, setLocale] = useState("en-US");
  const { t } = useTranslation();

  useEffect(() => {
    // Update dayjs locale whenever the direction prop changes
    if (direction === "ar-SA") {
      console.log("trueAR");
      dayjs.locale("ar");
    } else {
      console.log("trueEN");

      dayjs.locale("en");
    }
  }, [direction]);
  console.log("direction", direction);
  const dateFormat = direction === "ar-SA" ? "YYYY/MM/DD" : "MM/DD/YYYY";
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={t("Date Picker")}
          format={dateFormat}
          // onChange={(newValue) => setValue(newValue)}
          locale={direction}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

CustomDatePicker.propTypes = {
  direction: PropTypes.string.isRequired, // Example prop validation for 'isRTL' prop
};

export default CustomDatePicker;
