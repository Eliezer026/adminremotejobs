import React, { useState, useEffect } from "react";
import CardProfile from "./CardProfiles";
import { Box } from "@material-ui/core";
import { firestore } from "../firebase";

const Allcards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firestore.collection("InforVitaes").onSnapshot((querySnapshot) => {
      let dates = [];
      querySnapshot.forEach((doc) => {
        dates.push({ ...doc.data(), id: doc.id });
      });

      setUsers(dates);
      console.log(dates);
    });
  }, []);

  return (
    <Box>
      {users.map((tt) => (
        <CardProfile birth={tt.birth} />
      ))}
    </Box>
  );
};
export default Allcards;
