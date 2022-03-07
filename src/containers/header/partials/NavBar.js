import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import sanityClient from "../../../client";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "black",
  },
  navContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: 160,
    justifyContent: "space-between",
  },

  linkItem: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function NavBar() {
  const [mainMenu, setMainMenu] = React.useState(null);

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "navigation"]{
      title,
      navId,
      items
    }`
      )
      .then((data) => {
        setMainMenu(data[0]?.items);
      })
      .catch(console.error);
  }, []);

  const classes = useStyles();
  return (
    <AppBar className={classes.appBarRoot}>
      <Toolbar className={classes.toolbar}>
        <nav className={classes.navContainer}>
          {mainMenu?.map((item, idx) => (
            <Typography>
              <NavLink
                className={classes.linkItem}
                to={idx === 0 ? "/" : `${item.text}`}
              >
                {item.text}
              </NavLink>
            </Typography>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
