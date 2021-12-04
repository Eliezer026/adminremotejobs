import React, { Component } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Letter: {
    marginTop: 60,
    marginRight: 30,
  },
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.Letter}>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil.SETTINGS
        </Typography>
      </Box>
    </div>
  );
};

export default Settings;

/**
 * 
 * 
 * const [users, setUsers] = useState({
    birth: "",
    dirrection: "",
    email: "",
    experienceJobs: "",
    infoEducation: "",
    namefull: "",
    phone: "",
  });

  useEffect(() => {
    firestore
      .collection("InforVitaes")
      .get()
      .then((querySnapshot) => {
        let dates = [];
        querySnapshot.forEach((doc) => {
          dates.push(doc.data());
          console.log(dates);

          setUsers({
            ...doc.data(),
          });
        });
      });
  }, []);

  const date = [
    {
      birth: users.birth,
      dirrection: users.dirrection,
      email: users.email,
      experienceJobs: users.experienceJobs,
      infoEducation: users.infoEducation,
      namefull: users.namefull,
      phone: users.phone,
    },
  ];
 * 
 */
