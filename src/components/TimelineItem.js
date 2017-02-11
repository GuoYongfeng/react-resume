import React, { Component } from 'react'
import { Timeline } from 'antd'

const TimelineItem = ( props ) => {
  let { name, description, html_url } = props

  return (
    <Timeline.Item>
        <div className="project-item">
            <div className="item-title">
                { name }
                <a className="item-link"
                href={html_url}
                target="_blank">
                    <i className="iconfont icon-link"></i>源代码
                </a>
            </div>
            <div className="item-info">
                <div className="item-desc">
                    { description }
                </div>
            </div>
        </div>
    </Timeline.Item>
  )
}

export default TimelineItem
