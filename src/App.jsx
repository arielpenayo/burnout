import "./App.css";
import { StepOne } from "./StepOne";
import StepWizard from "react-step-wizard";
import { StepTwo } from "./StepTwo";
import Nav from "./Nav";
import { StepThree } from "./StepThree";
import "/src/transitions.css";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const update = (field, value) => {
    console.log(field, value);
  };

  const handleLogin = (formData) => {
    // Add your login logic here
    console.log("Login", formData);
    setLoggedIn(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const [state, updateState] = useState({
    form: {},
    transitions: {
      enterRight: "animated enterRight",
      enterLeft: "animated enterLeft",
      exitRight: "animated exitRight",
      exitLeft: "animated exitLeft",
      intro: "animated intro",
    },
  });
  return (
    <>
      <div className="container">
        {isLoggedIn ? (
          <StepWizard nav={<Nav />} transitions={state.transitions}>
            <StepOne update={update} />
            <StepTwo update={update} />
            <StepThree update={update} />
          </StepWizard>
        ) : (
          <Login 
          username={username} 
          handleUsernameChange={handleUsernameChange} 
          handleLogin={handleLogin} 
        />
        )}
      </div>
    </>
  );
}

export default App;
