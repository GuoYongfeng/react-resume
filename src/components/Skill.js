import React from 'react'
import AboutItem from './AboutItem.js'

const Skill = () => {
    const skillArray = [
        { id: 0, styleName:'iconfont icon-html',title:'HTML5',desc:'熟练掌握HTML/HTML5新特性及其运用，并独立开发过多个微信应用。'},
        { id: 1, styleName:'iconfont icon-css',title:'CSS3',desc:'熟练掌握CSS/CSS3新特性，并开发个多个Hybrid应用，熟悉Webapp开发。'},
        { id: 2, styleName:'iconfont icon-javascript',title:'ES6/7',desc:'掌握JS语言底层原理，掌握JS新标准ES6、ES7的语法特性(类，箭头函数，解构赋值等)，熟悉函数式编程，在项目中有深度实战。'},
        { id: 3, styleName:'iconfont icon-react',title:'React.js',desc:'熟练运用React.js，掌握React Router、Redux等react技术栈的开发和封装能力，并熟悉底层源码，并研发了一系列200多技术视频。'},
        { id: 4, styleName:'iconfont icon-jquery',title:'Node.js',desc:'熟练运用Node.js的客户端使用和服务开发，并维护多个相关开源项目。'},
        // { id: 5, styleName:'iconfont icon-sass',title:'Sass',desc:'熟悉运用css预编译器Sass'},
        // { id: 6, styleName:'iconfont icon-xiaochengxu',title:'微信小程序',desc:'熟练运用微信小程序开发工具开发小程序项目。'},
        { id: 7, styleName:'iconfont icon-frame',title:'前端库和框架',desc:'掌握主流的Bootstrap、Ant design等UI库和框架，并从0到1打造了自己团队的开源前端框架'},
        { id: 8, styleName:'iconfont icon-tools',title:'前端工程化',desc:'熟悉前端工程化在不同前端项目中的落地实现，并且熟练使用Yarn、webpack2、git等开发工具。'},
        { id: 9, styleName:'iconfont icon-Programming',title:'团队管理',desc:'具体超过30人的技术团队的组建和管理经验，兼任过项目经理和产品经理，并熟悉敏捷管理模式'}
    ]
    return (
        <div className="skill-container">
            <h1 className="skill-title">擅长技术</h1>
            <div className="skill-content">
                {skillArray.map((message) => <AboutItem key={message.id} message={message} />)}
            </div>

        </div>
    )
}

export default Skill
