import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FilesPhotos from "./FilesPhotos";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  Letter: {
    marginTop: 60,
    marginRight: 30,
  },

  width: {
    padding: 350,
  },
}));

const Jobs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Letter}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <FilesPhotos />
        </div>
      </form>
    </Box>
  );
};

export default Jobs;
