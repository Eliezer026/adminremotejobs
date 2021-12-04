import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { firestore } from "../firebase";
import ModalEmail from "./ModalEmail";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "120ch",
    backgroundColor: theme.palette.background.paper,
    marginTop: 80,
  },
  inline: {
    display: "inline",
  },

  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px, solid #000",
    boxShadow: theme.shadows[5],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textfield: {
    width: "100%",
  },
}));

const EmailDates = () => {
  const [userInform, setUserInform] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    firestore.collection("usersInform").onSnapshot((querySnapshot) => {
      let dates = [];
      querySnapshot.forEach((doc) => {
        dates.push({ ...doc.data(), id: doc.id });
      });

      console.log(dates);
      setUserInform(dates);
    });
  }, []);

  userInform.map((user) => console.log(user.id));

  return (
    <div className="">
      <List className={classes.root}>
        {userInform.map((user) => (
          <ModalEmail user={user} />
        ))}
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};

export default EmailDates;
