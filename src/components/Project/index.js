import React, { Component } from 'react'
import styled from 'styled-components'
import './index.css'
import eventEmitter from '../../utils/event'

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 8px 16px 8px 0;
`
export default class Project extends Component {
    showDialog = () => {
        eventEmitter.emit('dialog', 'https://shenfeng1945.xyz/weme/weme.mp4')
    }
    render() {
        return (
            <div className="project-page">
                <h2 className="tabs-content-head">Portfolio</h2>
                <ul className="projects">
                    <li className="project">
                        <h2>慧护爱真(工作项目 2017.11-2018.1)</h2>
                        <img src="https://i.loli.net/2018/03/26/5ab8a13747499.png" alt="" />
                        <div className="project-intro">
                            <p>这是一个护理，保健仪器类的商城管理平台，拥有移动端页面，后台管理页面和网点端页面。后台可以发布各种类型商品，商城页面可以登陆后，填写自己的收获地址并支付购买，订单确定后，对应网点的客服人员会帮你送货上门，并上门安装，之后还可以享受维修和保养服务。</p>
                            <p>功能：登录注册，加入购物车，付款，退换货，维修保养，开发票，会员，优惠券</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <Img src="http://shop.e-caretech.net/web/images/favicon.png" alt="" />
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                                <svg className="icon" title="jquery">
                                    <use xlinkHref="#icon-jquery"></use>
                                </svg>
                                <svg className="icon" title="webpack">
                                    <use xlinkHref="#icon-webpack"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="./jump.html?id=2" target="_blank" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>Canvas赛车游戏(工作项目 2018.1-2018.1)</h2>
                        <img src="http://p68cy51nt.bkt.clouddn.com/tesla.png" alt="" />
                        <div className="project-intro">
                            <p>几百人同时玩这个赛车竞速游戏，控制刹车和加速，在规定时间内跑完全程，车通过随机出现的路障时有速度限制，超过了就要扣分，并计入总成绩，最终看谁用时最短。</p>
                            <p>技术栈：通过Canvas API不断绘制图形，达到动画效果。</p>
                            <p>部署：原部署在公司服务器上，由于活动结束，现在移除了。</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon" title="网易云音乐">
                                    <use xlinkHref="#icon-tesla"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                                <svg className="icon" title="jquery">
                                    <use xlinkHref="#icon-jquery"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/tesla-game" target="_blank" className="github border">
                                    Github
                        </a>
                                <a href="./jump.html?id=3" target="_blank" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>上映科技广告平台(工作经历，2018.1-2018.2)</h2>
                        <img src="https://i.loli.net/2018/03/28/5abaf45268c76.png" alt="" />
                        <div className="project-intro">
                            <p>公司广告发布系统，现只有静态页面，暂无数据交互</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-jquery"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/ad-system" target="_blank" className="github border">
                                    Github
                            </a>
                                <a href="./jump.html?id=5" target="_blank" className="preview border">
                                    Preview
                            </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>Vue重构有赞商城</h2>
                        <img src="https://i.loli.net/2018/03/27/5ab9ffd1f0280.png" alt="" />
                        <div className="project-intro">
                            <p>使用Vue重构有赞商城以及多页面的应用,使用Rap模拟数据。旨在熟悉vue在项目中的具体应用。</p>
                            <p>技术栈：vue-cli+Router+Vuex+Rap</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-vuejs"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                                <Img src="http://p68cy51nt.bkt.clouddn.com/yz_fc.ico" alt="" />
                                <svg className="icon" title="webpack">
                                    <use xlinkHref="#icon-webpack"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/vue-youzan" target="_blank" className="github border">
                                    Github
                            </a>
                                <a href="./jump.html?id=4" target="_blank" className="preview border">
                                    Preview
                            </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>移动端网易云音乐</h2>
                        <img src="https://i.loli.net/2017/09/27/59cb6a1b86940.png" alt="" />
                        <div className="project-intro">
                            <p>这是一个网易云音乐手机端播放页面应用。能够实现曲库列表实时更新、搜索数据请求、歌曲播放、暂停、重新播放等效果。</p>
                            <p>功能: 歌曲播放、歌单实时更新、曲库搜索、歌词滚动</p>
                            <p>部署：LeanCloud + 七牛云</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon" title="网易云音乐">
                                    <use xlinkHref="#icon-CN_NetEasemusic"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                                <svg className="icon" title="jquery">
                                    <use xlinkHref="#icon-jquery"></use>
                                </svg>
                                <svg className="icon" title="webpack">
                                    <use xlinkHref="#icon-webpack"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/NetEaseMusic" target="_blank" className="github border">
                                    Github
                        </a>
                                <a href="./jump.html?id=1" target="_blank" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>英雄联盟仿站</h2>
                        <img src="https://i.loli.net/2017/09/27/59cb5f33bfc73.png" alt="" />
                        <div className="project-intro">
                            <p>这是一个PC端的静态网页，像素级还原英雄联盟官网</p>
                            <p>技术栈:jQuery + ES6 + CSS3</p>
                            <p>该项目目的在于能够精确还原原稿的每一个细节，提升自己的css/html水平。</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-LOL"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-jquery"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-css"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/demojs/tree/master/lol-page" target="_blank" className="github border">
                                    Github
                        </a>
                                <a href="https://shenfeng1945.github.io/demojs/lol-page" target="_blank" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>在线Todo应用</h2>
                        <img src="https://i.loli.net/2017/10/15/59e32a1386f7d.png" alt="" />
                        <div className="project-intro">
                            <p>这是一个在线代办事项管理应用，支持注册，支持增删改查，云同步，视图切换等功能。</p>
                            <p>技术栈:React + LeanCloud + ES6</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-js"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-react"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/React-Todo" target="_blank" className="github border">
                                    Github
                        </a>
                                <a href="https://shenfeng1945.github.io/React-Todo/build/" target="_blank" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
