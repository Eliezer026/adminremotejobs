import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmailDates from "./EmailDates";

const useStyles = makeStyles((theme) => ({
  Letter: {
    marginTop: 60,
    marginRight: 30,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Mail = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Letter}>
      <EmailDates />
    </Box>
  );
};

export default Mail;
