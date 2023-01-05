import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("JWT Token : ", response.credential);
    let userObject = jwt_decode(response.credential);
    console.log("User -> ", userObject);
    setUser(userObject);
    document.getElementById("sign-in").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("sign-in").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "95548258727-b3qlpk5j3sjjik2rme8p4cu278lm0nkm.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("sign-in"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="sign-in"></div>
      {Object.keys(user).length > 0 && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
