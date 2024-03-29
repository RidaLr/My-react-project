import React, {Component} from 'react';
import {Layout, Header,Navigation,Drawer,Content, Button, Card, CardText } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
          <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
              <Header transparent title="Home" style={{color: 'white'}}>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/contacts">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/contacts">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content />
          </Layout>
      </div>

  );
}

export default App;
