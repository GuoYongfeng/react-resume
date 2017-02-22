import React, { Component } from 'react'
import './index.css'
import { Modal } from 'antd'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      img: ''
    }
    this.handlCancel = this.handlCancel.bind(this)
    this.showModal = this.showModal.bind(this)
  }
  handlCancel(e){
    this.setState({
      visible: false,
      img: ''
    })
  }
  showModal(e){
    console.log( e )
    this.setState({
      visible: true,
      img: e.currentTarget.getAttribute("data-src")
    })
  }
  render(){
    return (
      <div className="contact">
        <h1 className="contact-title"> 联系我 </h1>
        <div className="contact-content">
          <div className="contact-main">
            <div className="main-item"
              data-src="https://avatars2.githubusercontent.com/u/8686869?v=3&s=460"
              onClick={this.showModal}>
              <div className="contact-icon">
                <i className="iconfont icon-weixin"></i>
                <div className="item-content"> 微信：13552329235</div>
              </div>
            </div>
            <div className="main-item"
              data-src="https://github.com/GuoYongfeng/book/raw/master/content/images/pay/weixin.jpg"
              onClick={this.showModal}>
              <div className="contact-icon">
                <i className="iconfont icon-qq"></i>
                <div className="item-content"> QQ：296512521 </div>
              </div>
            </div>
            <a href="mailto:guoyff@yonyou.com" className="main-item">
            <div className="contact-icon">
              <i className="iconfont icon-email"></i>
              <div className="item-content"> 邮箱：296512521@yonyou.com </div>
            </div>
            </a>
          </div>
          <div className="contact-other">
            <p className="other-title"> 其他方式</p>
            <div className="other-content">
              <a href="" className="other-item">
                <i className="iconfont icon-github"></i>
              </a>
              <a href="" className="other-item">
                <i className="iconfont icon-zhihu"></i>
              </a>
              <a href="" className="other-item">
                <i className="iconfont icon-weibo"></i>
              </a>
            </div>
          </div>
          <Modal footer=""
            title=""
            visible={this.state.visible}
            onCancel={this.handlCancel}>
            <div style={{width: "100%", textAlign: "center"}}>
              <img style={{maxWidth: "100%"}} src={this.state.img} alt=""/>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Contact
