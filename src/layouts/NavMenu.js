import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

const NavMenu = ( props ) => {
  const { current, handleClick, collapse } = props

  return (
    <Menu mode="inline"
        theme="dark"
        defaultSelectedKeys={['home']}
        selectedKeys={[current]}
        onClick={handleClick}
    >
        <Menu.Item key="home">
            <Link to="/">
                <i className="iconfont icon-index"></i>
                {!collapse && <span className="nav-text">首页</span>}
            </Link>
        </Menu.Item>
        <Menu.Item key="about">
            <Link to="/about">
                <i className="iconfont icon-about"></i>
                {!collapse && <span className="nav-text">关于我</span>}
            </Link>
        </Menu.Item>
        <Menu.Item key="skill">
            <Link to="/skill">
                <i className="iconfont icon-skill"></i>
                {!collapse && <span className="nav-text">专业技能</span>}
            </Link>
        </Menu.Item>
        <Menu.Item key="project">
            <Link to="/project">
                <i className="iconfont icon-project"></i>
                {!collapse && <span className="nav-text">项目经验</span>}
            </Link>
        </Menu.Item>
        <Menu.Item key="contact">
            <Link to="/contact">
                <i className="iconfont icon-contact"></i>
                {!collapse && <span className="nav-text">联系我</span>}
            </Link>
        </Menu.Item>
    </Menu>
  )
}

export default NavMenu
