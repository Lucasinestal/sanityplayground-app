import React from "react";
import NavBar from "./partials/NavBar";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <NavBar />
    </div>
  );
}
