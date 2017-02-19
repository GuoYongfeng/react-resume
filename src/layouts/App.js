import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavMenu from './NavMenu.js'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: false
    }
    this.handleCollapse = this.handleCollapse.bind(this)
  }
  handleCollapse(){
    this.setState({
      collapse: !this.state.collapse
    })
  }
  render(){
    const collapse = this.state.collapse;

    return (
      <div>
        <NavMenu collapse={ collapse }
          handleCollapse={this.handleCollapse}/>
        <div className={ collapse ? "main main-collapse" : "main"}>
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
