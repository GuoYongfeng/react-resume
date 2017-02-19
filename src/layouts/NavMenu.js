import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'

import './NavMenu.css'

class NavMenu extends Component {

  getMenuItems( data ){
    return data.map( ( info ) => (
      <Menu.Item key={ info.name }>
        <Link to={ info.name == "home" ? "/" : `/${info.name}` }>
          <i className={ info.name == "home" ? "iconfont icon-index" : `iconfont icon-${info.name}`}></i>
          <span className="nav-text"> { info.desc } </span>
        </Link>
      </Menu.Item>
    ))
  }

  render(){

    const data = [
      { name: "home", desc: "首页" },
      { name: "skill", desc: "工作技能" },
      { name: "project", desc: "项目经验" },
      { name: "contact", desc: "联系我" },
      { name: "about", desc: "关于我" }
    ]

    return (
      <aside className="layout-aside">
        <div className="layout-logo">
          <i className="iconfont icon-jianli logo"></i>
          <span className="title-text"> 郭永峰 </span>
        </div>
        <Menu mode="inline"
          theme="dark"
          defaultSelectedKeys={["home"]}
          selectedKeys={["home"]}>
          { this.getMenuItems( data ) }
        </Menu>
        <div className="aside-action">
          <Icon type="right" />
        </div>
      </aside>
    )
  }
}

export default NavMenu
