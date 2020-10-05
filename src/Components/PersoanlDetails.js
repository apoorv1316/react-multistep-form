import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

function PersoanlDetails({ activeForm, previousForm, nextForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [country, setCountry] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [countryError, setCountryError] = useState("");

  useEffect(() => {
    if (firstName) {
      validateFirstName();
    }
    if (lastName) {
      validateLastName();
    }
    if (address) {
      validateAddress();
    }
    if (city) {
      validateCity();
    }
    if (zipCode) {
      validateZipCode();
    }
  }, [firstName, lastName, address, city, zipCode, country]);

  function validateOnClick() {
    validateFirstName();
    validateLastName();
    validateAddress();
    validateCity();
    validateZipCode();
    validateCountry();
    if (
      !firstNameError &&
      !lastNameError &&
      !addressError &&
      !cityError &&
      !zipCodeError &&
      !countryError &&
      firstName &&
      lastName &&
      address &&
      zipCode &&
      country
    ) {
      nextForm();
    }
  }
  const validateFirstName = () => {
    var nameRegex = /^[A-Za-z]+$/;
    if (firstName.length == 0) {
      setFirstNameError("First name can't be empty");
    } else if (firstName.length < 6) {
      setFirstNameError("First name must be 6 characters long");
    } else if (!nameRegex.test(firstName)) {
      setFirstNameError("Only alphabets are allowed");
    } else {
      setFirstNameError("");
    }
  };
  const validateLastName = () => {
    var nameRegex = /^[A-Za-z]+$/;
    if (lastName.length == 0) {
      setLastNameError("Last name can't be empty");
    } else if (lastName.length < 6) {
      setLastNameError("Last name must be 6 characters long");
    } else if (!nameRegex.test(lastName)) {
      setLastNameError("Only alphabets are allowed");
    } else {
      setLastNameError("");
    }
  };
  const validateAddress = () => {
    if (address.length == 0) {
      setAddressError("Address can't be empty");
    } else {
      setAddressError("");
    }
  };
  const validateCity = () => {
    if (city.length == 0) {
      setCityError("City can't be empty");
    } else {
      setCityError("");
    }
  };
  const validateZipCode = () => {
    var zipCodeRegex = /^[0-9]+$/;
    if (zipCode.length == 0) {
      setZipCodeError("Zip Code can't be empty");
    } else if (zipCode.length < 6 || zipCode.length > 6) {
      setZipCodeError("Zip code must be 6 characters long");
    } else if (!zipCodeRegex.test(zipCode)) {
      setZipCodeError("Enter valid zipcode");
    } else {
      setZipCodeError("");
    }
  };
  const validateCountry = () => {
    if (country.length == 0) {
      setCountryError("Select a country");
    } else {
      setCountryError("");
    }
  };
  return (
    <div>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <p>{firstNameError}</p>
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <p>{lastNameError}</p>

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <p>{addressError}</p>

        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <p>{cityError}</p>

        <TextField
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />
        <p>{zipCodeError}</p>

        <Select
          labelId="Country"
          id="demo-simple-select"
          onChange={(e) => {
            setCountry(e.target.value);
            countryError && setCountryError("");
          }}
        >
          <option value={"India"}>India</option>
          <option value={"USA"}>USA</option>
        </Select>
        <p>{countryError}</p>

        {activeForm > 1 && activeForm <= 3 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => previousForm()}
          >
            Previous
          </Button>
        )}
        {activeForm < 3 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => validateOnClick()}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={() => alert("hey")}
          >
            Submit
          </Button>
        )}
      </FormControl>
    </div>
  );
}

export default PersoanlDetails;
