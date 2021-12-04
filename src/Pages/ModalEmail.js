import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { firestore, auth } from "../firebase";
import Firebase from "../firebase";
import { TextField, Modal, Button } from "@material-ui/core";

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

const ModalEmail = ({ user }) => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [name, setName] = useState([]);
  const [companyname, setCompanyname] = useState([]);
  const [typejobs, setTypeJobs] = useState([]);

  const HandleUlpoad = (event) => {
    setName({
      [event.target.name]: event.target.value,
    });
  };

  const HandleCompanyName = (event) => {
    setCompanyname({
      [event.target.name]: event.target.value,
    });
  };

  const HandleTypesJobs = (event) => {
    setTypeJobs({
      [event.target.name]: event.target.value,
    });
  };

  console.log(name.messange + "hi ");
  console.log(companyname.companyname + "hi ");

  const save = () => {
    auth.onAuthStateChanged(() => {
      Firebase.database()
        .ref("MessagerUsers")
        .child(user.id)
        .child(companyname.companyname)
        .set(
          {
            messange: name.messange,
            typejobs: typejobs.typejobs,
          },
          (error) => {
            if (error) {
              console.log("one error " + error);
            } else {
              console.log("save dates");
            }
          }
        );
    });
  };

  const OpencloseModal = () => {
    setModal(!modal);
  };

  return (
    <ListItem style={{ alignItems: "flex-start" }}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {user.id}
              {user.namefull}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
            <Button color="primary" onClick={() => OpencloseModal()}>
              <Modal open={modal} onClose={OpencloseModal}>
                <div className={classes.modal}>
                  <div align="center">
                    <h1>Message: </h1>
                    <h1>Name: {user.namefull}</h1>
                  </div>

                  <TextField
                    label="name"
                    className={classes.textfield}
                    name="messange"
                    onChange={(value) => HandleUlpoad(value)}
                  />

                  <TextField
                    label="typeJobs"
                    className={classes.textfield}
                    name="typejobs"
                    onChange={(value) => HandleTypesJobs(value)}
                  />

                  <TextField
                    label="company"
                    className={classes.textfield}
                    name="companyname"
                    onChange={(value) => HandleCompanyName(value)}
                  />

                  <br />
                  <br />
                  <div align="right">
                    <Button onClick={() => save()} color="primary">
                      send
                    </Button>
                    <Button onClick={() => OpencloseModal()}>Cancel</Button>
                  </div>
                </div>
              </Modal>{" "}
              modal
            </Button>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ModalEmail;
