import { Route, Switch } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";
import Landing from "./screens/Landing";
import Portfolio from "./screens/Portfolio";
import "./css/main.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
