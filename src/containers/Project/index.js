import React, { Component } from 'react'
import { Timeline } from 'antd'

import './index.css'
import TimelineItem from './TimelineItem'
import { fetchRepos } from '../../api/fetchGithub'

class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      repos: []
    }
  }
  componentWillMount(){
    fetchRepos("guoyongfeng")
      .then( info => {
        this.setState({
          repos: info.data
        })
      })
  }
  render(){

    return (
      <div className="project">
        <h1 className="project-title"> 我的项目经验 </h1>
        <div className="project-content">
          <Timeline pending={<a href="https://github.com/GuoYongfeng"> 更多项目请访问我的 Github</a>}>
            {
              this.state.repos.map( msg => {
                let { id, name, html_url, description } = msg;

                return ( <TimelineItem key={id}
                  name={name}
                  html_url={html_url}
                  description={description}/>)
              })
            }
          </Timeline>
        </div>
      </div>
    )
  }
}

export default Project
