import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import arLocale from "date-fns/locale/ar-SA"; // Import the Arabic locale
import enLocale from "date-fns/locale/en-US"; // Import the English locale
import PropTypes from "prop-types";

// Register both Arabic and English locales
registerLocale("ar-SA", arLocale);
registerLocale("en-US", enLocale);

const CustomDatePicker = ({ selectedDate, onDateChange, locale }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      dateFormat="dd/MM/yyyy" // Customize date format as needed
      locale={locale} // Set the locale based on the 'locale' prop
      calendarClassName="arabic-calendar" // Add a class for Arabic styling if needed
    />
  );
};

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date), // Require selectedDate to be a Date object
  onDateChange: PropTypes.func.isRequired, // Require onDateChange to be a function
  locale: PropTypes.string.isRequired, // Pass the locale as a prop ('en-US' or 'ar-SA')
};

export default CustomDatePicker;
