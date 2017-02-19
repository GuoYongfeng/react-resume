import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../layouts/App.js'
import Skills from '../containers/Skills.js'
import Contact from '../containers/Contact.js'
import About from '../containers/About.js'
import Project from '../containers/Project.js'
import Home from '../containers/Home.js'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="skill" component={Skills} />
      <Route path="contact" component={Contact} />
      <Route path="about" component={About} />
      <Route path="project" component={Project} />
    </Route>
  </Router>
)

// / App + Home
// /about App + About
