import React from 'react'

const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img src="https://avatars2.githubusercontent.com/u/8686869?v=3&s=460" className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">郭永峰</p>
                    <p className="my-profession">用友网络前端架构师，现用友网络FED团队负责人</p>
                    <p className="my-word"> 曾先后就职于用友网络、PP租车、金山猎豹等大型互联网公司，加入用友网络后先后负责过技术平台开发工作，以及财务云、人力财务云等大型企业级SAAS应用的前端架构工作，具有独立组建并管理超过30人的研发团队经验，并拥有丰富的开源项目开发和管理经验。目前致力于打造企业级前端集成解决方案。在前端工程化实现、Nodejs应用开发、React技术研究、移动端开发等方向有丰富的工作经验，并热衷于线下技术交流和分享。</p>
                </div>
            </div>
        )
}

export default Home
