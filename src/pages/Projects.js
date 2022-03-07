import React from "react";
import sanityClient from "../client";
import ProjectItem from "../containers/ProjectItem";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectsWrapper: {
    marginTop: "80px",
    width: "100%",
    display: "flex",
    scrollSnapType: "x mandatory",
    overflowX: "scroll",
  },
}));

export default function Projects() {
  const [projectsData, setProjectsData] = React.useState(null);

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      _id,
      title,
      url,
      technologies,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => {
        setProjectsData(data);
      })
      .catch(console.error);
  }, []);

  console.log(projectsData);

  const classes = useStyles();

  return (
    <div className={classes.projectsWrapper}>
      {projectsData?.map((project, idx) => (
        <ProjectItem
          key={idx}
          title={project.title}
          image={project.mainImage.asset.url}
          url={project.url}
          alt={project.mainImage.alt}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}
