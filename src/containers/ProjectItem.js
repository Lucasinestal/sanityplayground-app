import React from "react";
import Thumbnail from "../components/thumbnail";
import ProjectTag from "../components/projectTag";
import Button from "../components/button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import sanityClient from "../client";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "10px",
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
      <Typography>{title}</Typography>
    </Card>
  );
}
