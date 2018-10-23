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
        eventEmitter.emit('dialog', {url: 'https://shenfeng1945.xyz/weme/weme.mp4',isVideo: true})
    }
    openDialog = () => {
        if(document.documentElement.clientWidth < 640){
            window.open('https://icook.shentop.com')
            return;
        } 
        eventEmitter.emit('dialog',{url:'https://icook.shentop.com',isVideo: false,avatar: 'https://i.loli.net/2018/10/23/5bce8699d3ea6.png'})
    }
    render() {
        return (
            <div className="project-page">
                <h2 className="tabs-content-head">Portfolio</h2>
                <ul className="projects">
                    <li className="project">
                        <h2>WEME语音智能交互(工作项目 2018.5-2018.8)</h2>
                        <img src="https://shenfeng1945.xyz/weme/weme.gif" alt="" />
                        <div className="project-intro">
                            <p>这是一个养生，美容，育儿类语音智能App，拥有四种角色，选择你喜欢的角色，可以跟它对话，通过语音给角色发送各种动作和表情指令。同时可以进入不同的场景，在该场景内通过语音提问，得到想要的内容。</p>
                            <p>技术实现：用户通过点击角色，开启麦克风录音，将录音生成的wav文件，发送给后端，利用微软提供的语音转文本功能，将转换后的文字发给AI，AI通过训练和处理得到关键词，再发给后端处理，配合爬虫生成带各种指令的JSON数据，最后返回给前端进行交互。</p>
                            <p>技术栈(前端): Angular + TypeScript + RxJS + Ionic + Cordova </p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-angular"></use>
                                </svg>
                                <svg className="icon" title="ionic">
                                    <use xlinkHref="#icon-ionic"></use>
                                </svg>
                                <img className="icon" src="./assets/ts.svg" alt=""/>
                            </div>
                            <div className="_links">
                                <a className="preview border" onClick={() => this.showDialog()}>
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>圣托智能餐饮(工作项目 2018.9-2018.10)</h2>
                        <img src="./assets/shengtuo.png" alt="" />
                        <div className="project-intro">
                            <p>微信端: 基于微信公众号的点餐平台，利用Three.js导入3D模型，添加了更加真实的3D场景和3D角色，配合微信SDK的语音功能实现语音点餐和语音支付。</p>
                            <p>商家后台: 可以添加，下架菜品和菜类，显示交易数额的商家后台，使用Ionic打包成Android的Apk。</p>
                            <p>技术栈: Angular6 + Three.js + Ionic</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon" title="angular">
                                    <use xlinkHref="#icon-angular"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-ionic"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-wechat"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a onClick={() => this.openDialog()} className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>慧护爱真(工作项目 2017.11-2018.1)</h2>
                        <img src="https://i.loli.net/2018/03/26/5ab8a13747499.png" alt="" />
                        <div className="project-intro">
                            <p>这是一个护理，保健仪器类的商城管理平台，拥有移动端页面，后台管理页面和网点端页面。后台可以发布各种类型商品，商城页面可以登陆后，填写自己的收获地址并支付购买，订单确定后，对应网点的客服人员会帮你送货上门，并上门安装，之后还可以享受维修和保养服务。</p>
                            <p>功能：登录注册，加入购物车，付款，退换货，维修保养，开发票，会员，优惠券</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <Img src="http://shop.e-caretech.net/web/images/favicon.png" />
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
                                <a href="http://shop.e-caretech.net/" target="_blank" rel="noopener noreferrer" className="preview border">
                                    Preview
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>Sticky在线便利贴</h2>
                        <img src="https://i.loli.net/2018/10/22/5bcd40e362a4b.jpg" alt="" />
                        <div className="project-intro">
                            <p>利用Github授权登录，配合JWT，生成你自己的便利贴，可以添加，删除内容，标记重要程度和是否完成，同时支持按星级和创建时间进行排序，便于管理查看你的内容，是一个记录日常生活的实用小工具。</p>
                            <p>功能: 登录、增删改查、瀑布流布局、卡片移动</p>
                            <p>技术栈：Vue + Express + Sequelize + Oauth2</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon" title="Vue">
                                    <use xlinkHref="#icon-vuejs"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-node"></use>
                                </svg>
                                <svg className="icon" title="jquery">
                                    <use xlinkHref="#icon-jquery"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/sticky-note-vue/tree/dev" target="_blank" rel="noopener noreferrer" className="github border">
                                    Github
                        </a>
                                <a href="https://shenfeng1945-sticky.netlify.com" target="_blank" rel="noopener noreferrer" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>IM即时通讯应用</h2>
                        <img src="https://i.loli.net/2018/10/22/5bcd50778a12b.png" alt="" />
                        <div className="project-intro">
                            <p>基于环信IMSDK搭建一个IM系统，包含单聊，登录，注册，更换头像，搜索用户,添加好友等模块。</p>
                            <p>环信SDK不支持查看所有用户和设置头像功能，后台起着保存用户信息的作用。</p>
                            <p>技术栈:React全家桶 + Express + Mongoose</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-react"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-node"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-webpack"></use>
                                </svg>
                                <svg className="icon">
                                    <use xlinkHref="#icon-sass"></use>
                                </svg>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/react-im" target="_blank" rel="noopener noreferrer" className="github border">
                                    Github
                        </a>
                                <a href="https://react-im.netlify.com" target="_blank" rel="noopener noreferrer" className="preview border">
                                    Preview
                        </a>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <h2>CloudSearch</h2>
                        <img src="https://i.loli.net/2018/10/22/5bcd2642f33bd.png" alt="" />
                        <div className="project-intro">
                            <p>这是一个集成了Github搜索，音乐搜索和音乐播放的应用，配合RxJS旨在学习响应式编程在项目中的应用。</p>
                            <p>技术栈:Angular/Cli + RxJS</p>
                        </div>
                        <div className="project-tech">
                            <div className="icons">
                                <svg className="icon">
                                    <use xlinkHref="#icon-angular"></use>
                                </svg>
                                <img className="icon" src="https://i.loli.net/2018/10/22/5bcd2cd06b61d.png" alt=""/>
                                <img className="icon" src="./assets/ts.svg" alt=""/>
                            </div>
                            <div className="_links">
                                <a href="https://github.com/shenfeng1945/angular-mix" target="_blank" rel="noopener noreferrer" className="github border">
                                    Github
                        </a>
                                <a href="https://cloudsearch.netlify.com" target="_blank" rel="noopener noreferrer" className="preview border">
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
