import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Menu, Icon, Button, Modal } from 'antd'

import NavMenu from './NavMenu'
import FlipNav from './FlipNav'
const SubMenu = Menu.SubMenu

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: true,
            current: 'home',
            num: 0,
            visible: false,
            direction: 1
        }
        this.onCollapseChange = this.onCollapseChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    //在完成首次渲染之前调用（首次加载或刷新页面），根据url的hash值改变state，具体表现为侧边栏选中项与页面渲染页相对应
    componentWillMount() {
        const width = window.screen.availWidth
        const height = window.screen.availHeight
        const newkey = window.location.hash.split('#/')[1] || 'home'
        const keyArray = ['home', 'about', 'skill', 'project', 'contact']
        let num = 0
        keyArray.forEach((key, index) => {
            if (newkey == key) {
                num = index
            }
        })
        this.setState({
            current: newkey,
            num,
        })
        if (height > width) {
            this.setState({
                visible: true
            })
        }
    }

    //完成渲染新的props或者state后调用（切换路由），路由变化引发hash值变化，通过hash值与之前
    //状态属性作相应比较，如有变化则改变state，以达到侧边栏选中项与页面渲染页相对应
    componentDidUpdate(prevProps, prevState) {
        const newkey = window.location.hash.split('#/')[1] || 'home'
        if (newkey != prevState.current) {
            const keyArray = ['home', 'about', 'skill', 'project', 'contact']
            let num = 0
            keyArray.forEach((key, index) => {
                if (newkey == key) {
                    num = index
                }
            })
            let direction = 0
            direction = (prevState.num - num) > 0 ? 0 : 1
            this.setState({
                current: newkey,
                num,
                direction,
            })
        }
    }

    //路由切换时，初始化容器滚动条位置
    handleClick() {
        this.scroll.scrollTop = 0
    }

    //侧边栏状态切换
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    //隐藏模态框
    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        const { collapse, num, direction } = this.state
        const routerArray = ['/', '/about', '/skill', '/project', '/contact']

        return (
            <div className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
                <aside className="layout-sider">
                    <div className="layout-logo">
                        <i className="iconfont icon-jianli" id="logo"></i>
                        {!collapse && <span className="title-text"> 郭永峰 </span>}
                    </div>
                    <NavMenu current={this.state.current}
                      handleClick={this.handleClick}
                      collapse={this.state.collapse} />
                    <div className="aside-action" onClick={this.onCollapseChange}>
                        {collapse ? <Icon type="right" /> : <Icon type="left" />}
                    </div>
                </aside>
                <FlipNav num={this.state.num}
                  routerArray={routerArray}
                  handleClick={this.handleClick} />
                <div className={direction > 0 ? "layout-main" : "layout-main back"} ref={(div) => { this.scroll = div }}>
                    <ReactCSSTransitionGroup
                        transitionName="transitionWrapper"
                        component="div"
                        className="transitionWrapper"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        <div key={this.props.location.pathname}
                            style={{ position: "absolute", width: "100%" }}>
                            {
                              // 这里就是主界面展示区域
                              this.props.children
                            }
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
                <Modal title="" footer=""
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <p style={{ textAlign: 'center' }}>横屏浏览效果更佳哦！</p>
                </Modal>
            </div>
        )
    }
}
