import React from "react";
import ReactPhoneInput from "react-phone-input-material-ui";
import { TextField, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = (theme) => ({
  field: {
    margin: "10px 0",
  },
  countryList: {
    ...theme.typography.body1,
  },
});

function PhoneField(props) {
  const { value, defaultCountry, onChange, classes } = props;

  return (
    <>
      {/* Configure more */}
      <ReactPhoneInput
        value={value}
        defaultCountry={defaultCountry || "gb"}
        onChange={onChange}
        inputClass={classes.field}
        dropdownClass={classes.countryList}
        component={TextField}
      />
    </>
  );
}

export default withStyles(styles)(PhoneField);
PhoneField.propTypes = {
  value: PropTypes.string.isRequired,
  defaultCountry: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
