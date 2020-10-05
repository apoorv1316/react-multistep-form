import React, { useState } from "react";
import BasicDetails from "./Components/BasicDetails";
import PersonalDetails from "./Components/PersoanlDetails";
import QualificationDetails from "./Components/QualificationDetails";
import Button from "@material-ui/core/Button";
import "./index.css";

function App() {
  const [activeForm, setActiveForm] = useState(1);

  function nextForm() {
    setActiveForm((prevState) => prevState + 1);
  }
  function previousForm() {
    setActiveForm((prevState) => prevState - 1);
  }
  function ActiveForm() {
    switch (activeForm) {
      case 1:
        return (
          <BasicDetails
            activeForm={activeForm}
            nextForm={nextForm}
            previousForm={previousForm}
          />
        );
      case 2:
        return (
          <PersonalDetails
            activeForm={activeForm}
            nextForm={nextForm}
            previousForm={previousForm}
          />
        );
      case 3:
        return (
          <QualificationDetails
            activeForm={activeForm}
            nextForm={nextForm}
            previousForm={previousForm}
          />
        );

      default:
        break;
    }
  }
  return (
    <div>
      <ActiveForm />
    </div>
  );
}

export default App;
