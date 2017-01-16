import React from 'react';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => (
  <div>
    <Navbar inverse fixedTop>
        <Grid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">HackerNews Reader</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={2} href="/top">Top</NavItem>
              <NavItem eventKey={2} href="/new">New</NavItem>
              <NavItem eventKey={2} href="/best">Best</NavItem>
              <NavItem eventKey={2} href="/jobs">Jobs</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#">GitHub</NavItem>
            </Nav>
        </Grid>
    </Navbar>
  </div>
);

export default Navigation;
