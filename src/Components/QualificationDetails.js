import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

function QualificationDetails({ activeForm, previousForm, nextForm }) {
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [schoolError, setSchoolError] = useState("");
  const [collegeError, setCollegeError] = useState("");

  useEffect(() => {
    if (school) {
      validateSchool();
    }
    if (college) {
      validateCollege();
    }
  }, [school, college]);

  function validateOnClick() {
    validateSchool();
    validateCollege();
    if (!schoolError && !collegeError && school && college) {
      nextForm();
    }
  }
  const validateSchool = () => {
    if (school.length == 0) {
      setSchoolError("School can't be empty");
    } else {
      setSchoolError("");
    }
  };
  const validateCollege = () => {
    if (college.length == 0) {
      setCollegeError("College can't be empty");
    } else {
      setCollegeError("");
    }
  };
  return (
    <div>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="School"
          variant="outlined"
          onChange={(e) => {
            setSchool(e.target.value);
          }}
        />
        <p>{schoolError}</p>
        <TextField
          id="outlined-basic"
          label="College"
          variant="outlined"
          onChange={(e) => {
            setCollege(e.target.value);
          }}
        />
        <p>{collegeError}</p>
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
          <Button variant="contained" color="primary">
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={() => validateOnClick()}
          >
            Submit
          </Button>
        )}
      </FormControl>
    </div>
  );
}

export default QualificationDetails;
