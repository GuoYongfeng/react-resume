import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavMenu from './NavMenu.js'
import './App.css'

class App extends Component {
  render(){
    return (
      <div>
        <NavMenu />
        <div className="main">
          <ReactCSSTransitionGroup
            className="app"
            component="div"
            transitionName="app"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            <div className="content" key={this.props.location.pathname}>
              { this.props.children }
            </div>
          </ReactCSSTransitionGroup>

        </div>
      </div>
    )
  }
}
export default App
