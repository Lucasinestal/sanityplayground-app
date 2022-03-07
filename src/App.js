import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Header from "./containers/header/index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "60px",
    margin: "auto",
  },

  linkItem: {
    margin: "5px 10px",
    color: "white",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
