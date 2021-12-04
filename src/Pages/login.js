import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import logo from "../media/adminlogo.jpg";
import { auth, firestore } from "../firebase";

export class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      progress: false,
    };

    this.handleChange = this.handleChange.bind();
    this.login = this.handleChange.bind();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const login = () => {
      let valid_data = true;
      this.state.email_error = null;
      this.state.password_error = null;
      console.log("ggfxgfgdf");

      if (this.state.email === "") {
        this.setState({ email_error: "Required!" });
        console.log(this.state.email_error);
        valid_data = false;
      }
      if (this.state.password === "") {
        this.state.password_error = "Required!";
        valid_data = false;
      }

      this.setState({
        update: true,
      });

      if (valid_data) {
        this.state.progress = true;
      }

      if (valid_data) {
        console.log("True");

        firestore
          .collection("admins")
          .where("email", "==", this.state.email)
          .where("IsAdmin", "==", true)
          .get()
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              auth
                .signInWithEmailAndPassword(
                  this.state.email,
                  this.state.password
                )
                .then((res) => {
                  this.props.history.replace("/");
                })
                .catch((err) => {
                  if (err.code === "auth/wrong-password") {
                    this.state.password_error = "Incorrect Password!";
                  }

                  this.setState({
                    progress: false,
                  });
                });
            } else {
              console.log("False");
              this.state.email_error = "Not Allowed!";

              this.setState({
                progress: false,
              });
            }
          });
      }
    };

    return (
      <Container maxWidth="sm">
        <Box
          bgcolor="white"
          borderRadius="12px"
          boxShadow="2"
          textAlign="center"
          p="24px"
          mt="50px"
        >
          <img src={logo} height="100px" />
          <Typography
            variant="h5"
            color="textSecondary"
            style={{ fontSize: 30 }}
          >
            ADMIN
          </Typography>

          <TextField
            label="Email"
            id="standard-size-small"
            defaultValue=""
            fullWidth
            name="email"
            error={this.state.email_error != null}
            helperText={this.state.email_error}
            onChange={this.handleChange}
            size="small"
            margin="normal"
          />

          <TextField
            label="Password"
            id="standard-size-small"
            type="password"
            defaultValue=""
            name="password"
            error={this.state.password_error != null}
            helperText={this.state.password_error}
            onChange={this.handleChange}
            fullWidth
            size="small"
            margin="normal"
          />

          <br />
          <br />
          {this.state.progress ? (
            <CircularProgress thickness={5} size={30} color="primary" />
          ) : null}

          <br />
          <br />

          <Button
            disableElevation
            onClick={() => login()}
            variant="contained"
            color="primary"
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }
}

export default login;
