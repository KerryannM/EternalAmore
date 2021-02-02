import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./core/routes";
import { Home, About, Contact, Gallery } from "./pages";

function renderRoutes(routes) {
  return routes.map((config) => {
    return (
      <li>
        <Link to={config.route}>{config.title}</Link>
      </li>
    );
  });
}

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>{renderRoutes(routes)}</ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
