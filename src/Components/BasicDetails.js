import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

function BasicDetails({ activeForm, previousForm, nextForm }) {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  //   const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [userNameError, setUserNameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (userName) {
      validateUserName();
    }
    if (bio) {
      validateBio();
    }
    if (email) {
      validateEmail();
    }
    if (phone) {
      validatePhone();
    }
  }, [userName, bio, email, phone]);

  function validateOnClick() {
    validateUserName();
    validateBio();
    validateEmail();
    validatePhone();
    if (
      !userNameError &&
      !bioError &&
      !emailError &&
      !phoneError &&
      userName &&
      bio &&
      email &&
      phone
    ) {
      nextForm();
      console.log("hiii");
    }
  }

  const validateUserName = () => {
    var userRegex = /^[a-z]+$/;
    if (userName.length == 0) {
      setUserNameError("Username can't be empty");
    } else if (userName.length < 6) {
      setUserNameError("Username must be 6 characters long");
    } else if (!userRegex.test(userName)) {
      setUserNameError("Username must contain only lowercase alphabets");
    } else {
      setUserNameError("");
    }
  };
  const validateBio = () => {
    if (bio.length == 0 || bio.length < 5) {
      setBioError("Bio must contain atleast 150 characters");
    } else {
      setBioError("");
    }
  };
  const validateEmail = () => {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.length == 0) {
      setEmailError("Email can't be empty");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter valid email");
    } else {
      setEmailError("");
    }
  };
  const validatePhone = () => {
    var phoneRegex = /^[7-9][0-9]{9}$/;

    if (phone.length == 0) {
      setPhoneError("Phone number can't be empty");
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Enter valid phone number");
    } else {
      setPhoneError("");
    }
  };
  return (
    <div>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <p>{userNameError}</p>
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          onChange={(e) => {
            setBio(e.target.value);
          }}
          required
        />
        <p>{bioError}</p>
        {/* <TextField id="outlined-basic" label="Photo" variant="outlined" onChange={(e)=>} /> */}
        <TextField
          id="outlined-basic"
          label="Email-id"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <p>{emailError}</p>

        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <p>{phoneError}</p>
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

export default BasicDetails;
