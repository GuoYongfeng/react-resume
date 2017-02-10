import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import App from '../layouts/App.js'
import Home from '../components/Home.js'
import About from '../components/About.js'
import Skill from '../components/Skill.js'
import Project from '../components/Project.js'
import Contact from '../components/Contact.js'

export default (
  <Router history={hashHistory} >
      <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="skill" component={Skill} />
          <Route path="project" component={Project} />
          <Route path="contact" component={Contact} />
      </Route>
  </Router>
)
