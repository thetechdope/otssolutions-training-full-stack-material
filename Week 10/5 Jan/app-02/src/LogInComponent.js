import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./App.css";

export default function LogInComponent() {
  const [loggedInUser, setLoggedInUser] = useState({});

  function onSuccessfullValidation(response) {
    const userDetails = jwt_decode(response.credential);
    setLoggedInUser(userDetails);
    console.log("User Details ", userDetails);
    document.getElementById("sign-in").hidden = true;
  }

  function handleLogout() {
    setLoggedInUser({});
    document.getElementById("sign-in").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "95548258727-b3qlpk5j3sjjik2rme8p4cu278lm0nkm.apps.googleusercontent.com",
      callback: onSuccessfullValidation,
    });

    google.accounts.id.renderButton(document.getElementById("sign-in"), {
      theme: "outline",
      size: "large",
    });
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="sign-in"></div>
      {Object.keys(loggedInUser).length > 0 && (
        <div>
          Hi, {loggedInUser.name}
          <br />
          <br />
          <img src={loggedInUser.picture} />
          <br />
          <br />
          <button onClick={() => handleLogout()}>Log Out</button>
        </div>
      )}
    </div>
  );
}
