import React from "react";
import Thumbnail from "../components/thumbnail";
import ProjectTag from "../components/projectTag";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    minWidth: "100%",
    scrollSnapAlign: "start",
  },
  projectItemTitle: {
    padding: 10,
  },
}));

export default function ProjectItem(props) {
  const classes = useStyles();

  console.log(props);
  const { technologies, image, url, title } = props;
  return (
    <Card className={classes.card}>
      <Thumbnail url={url} image={image}></Thumbnail>
      {technologies.map((technology, idx) => (
        <ProjectTag key={idx} technology={technology} />
      ))}
      <Typography className={classes.projectItemTitle}>{title}</Typography>
    </Card>
  );
}
