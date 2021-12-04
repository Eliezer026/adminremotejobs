import React, { Component } from "react";
import { TextField, Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default class ModalEmailPost extends Component {
  render() {
    const useStyles = makeStyles((theme) => ({
      textfield: {
        width: "100%",
      },
    }));

    return (
      <div>
        <TextField
          label="name"
          className={useStyles.textfield}
          name="messange"
        />
      </div>
    );
  }
}
