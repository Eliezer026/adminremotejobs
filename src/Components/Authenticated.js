import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { Redirect } from "react-router-dom";

const Authenticated = (props) => {
  const [loggedId, setloggedIn] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user.uid);
    });
  }, []);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setloggedIn(true);
      console.log("logeado");
    } else {
      setloggedIn(false);
    }
  });

  if (props.nonAuthenticated) {
    if (loggedId == null) {
      console.log(loggedId);
      return "Loading";
    } else if (!loggedId) {
      return props.children;
    } else if (loggedId) {
      return <Redirect to="/" />;
    }
  } else {
    if (loggedId == null) {
      console.log(loggedId);
      return "Loading";
    } else if (loggedId) {
      return props.children;
    } else if (!loggedId) {
      return <Redirect to="/login" />;
    }
  }
};

export default Authenticated;
