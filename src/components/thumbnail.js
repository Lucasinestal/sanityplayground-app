import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  thumbnailWrapper: {},
  thumbnail: {
    width: "100%",
  },
}));

export default function Thumbnail(props) {
  const classes = useStyles();
  const { image, url } = props;
  return (
    <a href={url}>
      <div className={classes.thumbnailWrapper}>
        <img className={classes.thumbnail} src={image} alt="project"></img>
      </div>
    </a>
  );
}
