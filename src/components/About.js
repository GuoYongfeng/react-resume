import React from 'react'
import AboutItem from './AboutItem.js'

const About = () => {
    const aboutArray = [
        { id: 0, styleName: 'iconfont icon-age', title: '年龄', desc: 27 },
        { id: 1, styleName: 'iconfont icon-sex', title: '性别', desc: '男' },
        { id: 2, styleName: 'iconfont icon-education', title: '学历', desc: '本科'},
        { id: 3, styleName: 'iconfont icon-University', title: '所在公司', desc: '用友网络'},
        { id: 4, styleName: 'iconfont icon-english', title: '英语水平', desc: 'CET-6'},
        { id: 5, styleName: 'iconfont icon-coordinate', title: '籍贯', desc: '江西赣州'},
        { id: 6, styleName: 'iconfont icon-experience', title: '工作经验', desc: '5年'},
        { id: 7, styleName: 'iconfont icon-intention', title: '求职意向', desc: '前端开发'},
        { id: 8, styleName: 'iconfont icon-state', title: '状态', desc: '在职'}
        ]
    return (
        <div className="about-container">
            <h1 className="about-title">关于我</h1>
            <div className="about-content">
                {
                  aboutArray.map((message) => {
                    return <AboutItem key={message.id} message={message} />
                  })
                }
            </div>
        </div>
    )
}

export default About
