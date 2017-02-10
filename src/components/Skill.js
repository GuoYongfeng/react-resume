import React from 'react'
import AboutItem from './AboutItem.js'

const Skill = () => {
    const skillArray = [
        { id: 0, styleName:'iconfont icon-html',title:'HTML',desc:'熟练运用HTML，掌握HTML5新特性(canvas，storage，media等)。'},
        { id: 1, styleName:'iconfont icon-css',title:'CSS',desc:'熟练运用CSS，掌握CSS3新特性(动画，弹性布局，媒体查询等)。'},
        { id: 2, styleName:'iconfont icon-javascript',title:'JS',desc:'熟练运用Javascript，掌握JS新标准ES6、ES7的语法特性(类，箭头函数，解构赋值等)，了解函数式编程。'},
        { id: 3, styleName:'iconfont icon-react',title:'React',desc:'熟练运用React.js，掌握React Router、Redux等react技术栈内容。'},
        { id: 4, styleName:'iconfont icon-jquery',title:'jQuery',desc:'熟练运用jQuery，掌握jQuery UI、jQuery Mobile等。'},
        { id: 5, styleName:'iconfont icon-sass',title:'Sass',desc:'熟悉运用css预编译器Sass'},
        { id: 6, styleName:'iconfont icon-xiaochengxu',title:'微信小程序',desc:'熟练运用微信小程序开发工具开发小程序项目。'},
        { id: 7, styleName:'iconfont icon-frame',title:'前端库和框架',desc:'掌握Bootstrap、MUI、WeUI、Ant Design等前端库和框架，了解Vue.js。'},
        { id: 8, styleName:'iconfont icon-tools',title:'前端工具',desc:'熟练使用vscode、sublime等代码编辑器，掌握photoshop、npm、webpack、git等开发工具。'},
        { id: 9, styleName:'iconfont icon-Programming',title:'其他编程语言',desc:'熟练运用Fortran、Matlab，熟悉C++、node.js、php，了解python。'}
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
