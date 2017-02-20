import React, { Component } from 'react'

import './index.css'

class About extends Component {
  getItems(data){

    return data.map( message => {
      let { id, styleName, title, desc } = message;

      return (
        <div className="item" key={id}>
          <div className="item-icon">
            <i className={`iconfont icon-${styleName}`}></i>
          </div>
          <div className="item-info">
            <p className="info-title"> { title } </p>
            <p className="info-desc"> { desc } </p>
          </div>
        </div>
      )
    })


  }
  render(){

    const data = [
      { id: 0, styleName: "age", title: "年龄", desc: "18" },
      { id: 1, styleName: "sex", title: "性别", desc: "男" },
      { id: 2, styleName: "education", title: "学历", desc: "大学本科" },
      { id: 3, styleName: "University", title: "学校", desc: "北航" },
      { id: 4, styleName: "english", title: "英语水平", desc: "六级" },
      { id: 5, styleName: "experience", title: "工作年限", desc: "六年" },
      { id: 6, styleName: "intention", title: "求职意向", desc: "前端工程师" }
    ]

    return (
      <div className="about">
        <h1 className="about-title"> 关于我</h1>
        <div className="about-content">
          { this.getItems(data) }
        </div>
      </div>
    )
  }
}

export default About
