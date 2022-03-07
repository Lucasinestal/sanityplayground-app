import React from "react";
import sanityClient from "../client";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  heroRoot: {},
  heroImage: {
    objectFit: "cover",
    height: 1800,
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    position: "fixed",
    top: "55%",
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  heroText: {
    marginTop: "30px",
    width: "40%",
    textAlign: "center",
    margin: "auto",
  },
}));

export default function Home() {
  const classes = useStyles();

  const [block, setBlock] = React.useState(null);
  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "landingHero"]{
            backgroundImage{
                asset->{
                  url
                },
                alt
              },
        heading,
        textContent,
      }`
      )
      .then((data) => {
        setBlock(data[0]);
      })
      .catch(console.error);
  }, []);

  console.log(block);

  return (
    <div className={classes.heroRoot}>
      <img
        className={classes.heroImage}
        src={block?.backgroundImage?.asset?.url}
        alt={block?.backgroundImage?.alt}
      />
      <div className={classes.heroContent}>
        <Typography
          sx={{ fontWeight: "bold" }}
          className={classes.heroHeading}
          variant="h2"
          component="h1"
        >
          {block?.heading}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} className={classes.heroText}>
          {block?.textContent}
        </Typography>
      </div>
    </div>
  );
}
