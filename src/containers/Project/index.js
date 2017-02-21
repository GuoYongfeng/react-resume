import React from 'react'
import { Timeline, Modal } from 'antd'
import TimelineItem from './TimelineItem'
import { getRepos } from '../../api/fetchGithubMsg'
import './index.css'
export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { repos: [] }
    }
    setReposData( username ) {
      getRepos( username )
        .then( info => this.setState({ repos: info.data }))
    }
    componentWillMount(){
      this.setReposData( "guoyongfeng" )
    }
    render() {
      let nodes = this.state.repos.map( items => (<TimelineItem key={items.id}
          name={items.name}
          description={items.description}
          html_url={items.html_url} />
      ) );
      return (
          <div className="project">
              <h1 className="project-title">项目经验</h1>
              <div className="project-content">
                  <Timeline pending={<a href="https://github.com/GuoYongfeng" target="_blank" className="item-title">更多项目内容尽在github（点击进入）</a>}>
                    { nodes }
                  </Timeline>
              </div>
          </div>
      )
    }
}
