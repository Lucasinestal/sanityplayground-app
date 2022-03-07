import React from "react";
import NavBar from "./partials/NavBar";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: "black",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <NavBar className={classes.headerContainer} />
    </div>
  );
}
