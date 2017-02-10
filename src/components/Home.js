import React from 'react'

const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img src="https://avatars2.githubusercontent.com/u/8686869?v=3&s=460" className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">郭永峰</p>
                    <p className="my-word">热爱生活，热爱编程，常年致力于改变世界拯救地球的伟大工作。</p>
                    <p className="my-profession">现用友网络前端架构师</p>
                    <a href="mailto:1479132837@qq.com" target="_blank" className="my-email">296512521@qq.com</a>
                </div>
            </div>
        )
}

export default Home
