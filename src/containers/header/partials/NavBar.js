import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: 160,
    justifyContent: "space-between",
  },

  linkItem: {
    color: "white",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBarRoot}>
      <Toolbar>
        <nav className={classes.navContainer}>
          <Typography>
            <NavLink className={classes.linkItem} to="/">
              Home
            </NavLink>
          </Typography>
          <Typography>
            <NavLink className={classes.linkItem} to="/About">
              About
            </NavLink>
          </Typography>
          <Typography>
            <NavLink className={classes.linkItem} to="/Projects">
              Projects
            </NavLink>
          </Typography>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
