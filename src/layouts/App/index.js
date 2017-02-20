import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavMenu from '../NavMenu'
import './index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: true,
      pathname: "home"
    }
    this.handleCollapse = this.handleCollapse.bind(this)
  }
  handleCollapse(){
    this.setState({
      collapse: !this.state.collapse
    })
  }
  componentDidUpdate(prevProps, nextProps){
    const newPathname = window.location.hash.split("#/")[1] || "home";

    if(newPathname != nextProps.pathname){
      this.setState({
        pathname: newPathname
      })
    }
  }
  render(){
    const collapse = this.state.collapse;

    return (
      <div>
        <NavMenu collapse={ collapse }
          handleCollapse={this.handleCollapse}
          pathname={this.state.pathname}/>
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
