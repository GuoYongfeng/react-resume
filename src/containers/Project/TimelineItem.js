import React from 'react'
import { Timeline } from 'antd'

const TimelineItem = (props) => {
  let { id, name, html_url, description } = props;

  return (
    <Timeline.Item>
      <div className="project-item">
        <div className="item-title">
          { name }
          <a href={html_url}
            className="item-link"
            target="_blank">
            <i className="iconfont icon-link"> 源码 </i>
            </a>
        </div>
        <div className="item-info">
          <div className="item-desc"> {description } </div>
        </div>
      </div>
    </Timeline.Item>
  )
}

export default TimelineItem
