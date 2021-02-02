import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "../../core/routes";
import { AboutUs, Contact, Faqs, Home, Family, Engagement, Wedding, Gallery, NotFoundPage } from "../../pages";

const NavLink = React.forwardRef((props, ref) => {
  return (
    <Nav.Link ref={ref} href={props.href}>
      {props.children}
    </Nav.Link>
  );
});

const NavLinkDropdown = React.forwardRef((props, ref) => {
  console.log("log: NavLinkDropdown", props);
  return (
    <NavDropdown ref={ref} title={props.title} id={props.title}>
        {
            props.dropdown.map((link, index)=>{
                return(<NavDropdown.Item key={index} href={link.route}>{link.title}</NavDropdown.Item>)
            })
        }
    </NavDropdown>
  );
});

function renderLinks() {
  return routes.map((config, index) => {
    let desiredComponent = NavLink;
    if (config.dropdown) {
      desiredComponent = (props)=><NavLinkDropdown {...props}{...config}/>
    }
    return (
      <Link key={index} to={config.route} component={desiredComponent}>
        {config.title}
      </Link>
    );
  });
}

const AppRouter = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Eternal Amore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{renderLinks()}</Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/faqs">
          <Faqs />
        </Route>
        <Route path="/family">
          <Family />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/engagement">
          <Engagement />
        </Route>
        <Route path="/wedding">
          <Wedding />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default AppRouter;
