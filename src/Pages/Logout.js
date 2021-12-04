import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

const Logout = () => {
  auth
    .signOut()
    .then(() => {
      window.localStorage.clear();
      window.location.href = "/login";
    })
    .catch((error) => {});
};

export default Logout;
