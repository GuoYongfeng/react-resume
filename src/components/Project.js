import React from 'react'
import { Timeline, Modal } from 'antd'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">项目经验</h1>
                <div className="project-content">
                    <Timeline pending={<a href="https://github.com/GuoYongfeng" target="_blank" className="item-title">更多项目内容尽在github（点击进入）</a>}>

                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    企业级前端集成解决方案 iuap design
                                    <a className="item-link"
                                        href="https://github.com/iuap-design">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        iuap design 是面向企业开发者提供的前端开发完整解决方案，从底层设计语言、开发工具、前端类库到开发框架和工程化建设等，iuap design 帮助开发者快速构建企业应用
                                    </div>
                                    <div className="item-img">
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan1-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan1.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan2-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan2.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan3-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan3.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan4-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan4.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan5-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan5.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan6-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan6.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    珠峰 React 架构课程全面发布
                                    <a className="item-link"
                                    href="https://github.com/swhz/wechat-small-program/tree/master/happyshopping"
                                    target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        本次架构课程首发于珠峰培训，课程内容非常丰富实用，
                                        包括webpack构建工具、ES6新语法特性、Babel编译器、Git操作、React基础和实战、
                                        React-router基础和实战、深入理解Redux及其应用等多个系列内容，绝对是新手入门最好的学习资料
                                    </div>
                                    <div className="item-img">
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin1-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin1.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin2-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin2.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin3-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin3.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin4-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin4.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Modal title="" footer="" width="80%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
