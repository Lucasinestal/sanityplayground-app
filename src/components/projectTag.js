import React from "react";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectTag: {
    borderRadius: 0,
  },
}));

export default function ProjectTag(props) {
  const classes = useStyles();
  const { technology } = props;
  return (
    <Chip
      className={classes.projectTag}
      variant="outlined"
      label={technology.title}
    ></Chip>
  );
}
