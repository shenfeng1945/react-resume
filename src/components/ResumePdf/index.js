import React, { Component } from 'react'
import './index.css'

export default class ResumePdf extends Component {
    render() {
        return (
            <div className="resume-pdf">
                <header>
                    <div className="head">
                        {/* <p><strong>在线简历：</strong><a href="https://shenfeng1945.netlify.com" target="_blank" rel="noopener noreferrer">https://shenfeng1945.netlify.com</a></p> */}
                        <div className="img">
                            <img src="https://s1.ax1x.com/2017/10/15/JZrUH.png" alt="头像" width="100" height="100" />
                        </div>
                        <h2>刘智超</h2>
                        <p>前端开发/Front-End Developer</p>
                    </div>
                    <ul className="message">
                        <li>
                            <i>
                                <svg className="icon"><use xlinkHref="#icon-location"></use></svg>
                            </i>
                            <span>深圳，广东</span>
                        </li>
                        <li>
                            <i>
                                <svg className="icon"><use xlinkHref="#icon-3-copy"></use></svg>
                            </i>
                            <span>13296504457</span>
                        </li>
                        <li>
                            <i>
                                <svg className="icon"><use xlinkHref="#icon-1"></use></svg>
                            </i>
                            <span>liuzhichao1993@foxmail.com</span>
                        </li>
                        <li>
                            <i>
                                <svg className="icon"><use xlinkHref="#icon-qq"></use></svg>
                            </i>
                            <span>823902826</span>
                        </li>
                    </ul>
                </header>
                <main className="main">
                    <section className="about-me">
                        <div className="icons">
                            <svg className="icon"><use xlinkHref="#icon-profile"></use></svg>
                        </div>
                        <div className="info">
                            <h4 className="title">个人介绍</h4>
                            <p className="border card">热爱计算机科学和互联网技术，关注Web发展，对新技术充满激情，良好的学习习惯，自学能力强。热爱生活，喜欢每天都富有激情的工作状态。性格乐观，能积极面对压力。</p>
                        </div>
                    </section>
                    <section className="education">
                        <div className="icons">
                            <svg className="icon"><use xlinkHref="#icon-teach"></use></svg>
                        </div>
                        <div className="info">
                            <h4 className="title">教育经历</h4>
                            <div className="card border">
                                <p>理学学士，武汉轻工大学</p>
                                <p>2011.09-2015.06</p>
                            </div>
                        </div>
                    </section>
                    <section className="education">
                        <div className="icons">
                            <svg className="icon"><use xlinkHref="#icon-portfolio"></use></svg>
                        </div>
                        <div className="info">
                            <h4 className="title">工作经历</h4>
                            <div className="card border">
                                <p>上映科技,2017.10-2018.3,前端工程师</p>
                                <p>天体万物智能科技,2018.4-2018.10,前端工程师</p>
                                <p>博彦科技(腾讯云外包),2018.11-2019.9,前端工程师</p>
                            </div>
                        </div>
                    </section >
                    <section className="skills">
                        <div className="icons">
                            <svg className="icon"><use xlinkHref="#icon-tools"></use></svg>
                        </div>
                        <div className="info">
                            <h4 className="title">职业技能</h4>
                            <ul className="skill-list">
                                <li className="skill card border">
                                    <h3 className="skill-head">JS/TS</h3>
                                    <ul className="skill-con">
                                        <li>熟练掌握HTML(5)和常用CSS(3)，具有像素级还原设计稿的能力。</li>
                                        <li>熟练掌握原生Javascript，掌握重要概念如:原型、闭包、作用域链、面向对象、事件循环、异步流程控制等概念。</li>
                                        <li>能够对复杂函数进行功能化封装，并编写类似jQuery常用的基本功能性插件。</li>
                                        <li>熟练使用ES6及ES7部分新特性。</li>
                                        <li>熟练使用TypeScript。</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">前端框架</h3>
                                    <ul className="skill-con">
                                        <li>熟悉Angular框架，能够独立架构小型项目，理解重要概念如: 生命周期，装饰器，单例服务等。能够封装功能组件和指令，配合RxJS控制异步流程。</li>
                                        <li>了解React框架及相关流行库的使用，理解重要概念如: 生命周期，虚拟Dom，redux原理等,并具有项目实战经验。</li>
                                        <li>了解Vue的基本使用，并了解其双向绑定和响应式原理。</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">浏览器/网络</h3>
                                    <ul className="skill-con">
                                       <li>了解HTTP协议，及浏览器常见特性如：事件机制、跨域、缓存、渲染机制等。</li>
                                       <li>了解前端安全和性能优化策略。</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">其他</h3>
                                    <ul className="skill-con">
                                        <li>熟悉Yarn、Npm和Git,能够使用Node.js搭配Express进行基本后台开发。</li>
                                        <li>熟悉CMD&AMD机制，熟悉Webpack打包，及优化手段。</li>
                                        <li>了解Less/Sass/PostCSS/Autoprefixer等CSS预处理和模块化工具。</li>
                                        <li>掌握基本的数据结构和算法。</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section >
                    <section className="projects">
                        <div className="icons">
                            <svg className="icon"><use xlinkHref="#icon-xiangmu"></use></svg>
                        </div>
                        <div className="info">
                            <h4 className="title">工作项目</h4>
                            <ul>
                                <li className="border card">
                                    <a href="https://console.cloud.tencent.com/beian" target="_blank" rel="noopener noreferrer">腾讯云网站备案</a>
                                    <p className="project-con">日常维护网站备案系统，处理备案异常工单，修复bug，重构备案系统。</p>
                                    <ul className="project-con">
                                        <li>技术栈： React + TypeScript + Redux</li>
                                        <li>预览地址： <a href="https://console.cloud.tencent.com/beian" target="_blank" rel="noopener noreferrer">https://console.cloud.tencent.com/beian</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="https://shenfeng1945.cn/weme/weme.mp4" target="_blank" rel="noopener noreferrer">WEME语音智能交互</a>
                                    <p className="project-con">这是一个养生，美容，育儿类语音智能App，拥有四种角色，选择你喜欢的角色，可以跟它对话，通过语音给角色发送各种动作和表情指令。同时可以进入不同的场景，在该场景内通过语音提问，得到想要的内容。</p>
                                    <ul className="project-con">
                                        <li>技术栈： Angular + TypeScript + RxJS + Ionic + Cordova</li>
                                        <li>预览地址： <a href="https://shenfeng1945.cn/weme/weme.mp4" target="_blank" rel="noopener noreferrer">https://shenfeng1945.cn/weme/weme.mp4</a></li>
                                    </ul>
                                </li>
                                {/* <li className="border card">
                                    <a href="https://icook.shentop.com">圣托智能餐饮</a>
                                    <p className="project-con">微信端: 基于微信公众号的点餐平台，利用Three.js导入3D模型，添加了更加真实的3D场景和3D角色，配合微信SDK的语音功能实现语音点餐和语音支付。</p>
                                    <p className="project-con">商家后台: 可以添加，下架菜品和菜类，显示交易数额的商家后台，使用Ionic打包成Android的Apk。</p>
                                    <ul className="project-con">
                                        <li>技术栈：Angular6 + Three.js + Ionic</li>
                                        <li>预览地址(微信端)： <a href="https://icook.shentop.com" target="_blank" rel="noopener noreferrer">https://icook.shentop.com</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="http://shop.e-caretech.net/">惠护爱真</a>
                                    <p className="project-con">这是一个护理，保健仪器类的商城管理平台,拥有移动端页面，后台管理页面和网点端页面。后台可以发布各种类型商品，商城页面可以登陆后，填写自己的收获地址并支付购买，订单确定后，对应网点的客服人员会帮你送货上门，并上门安装，之后还可以享受维修和保养服务。</p>
                                    <ul className="project-con">
                                        <li>功能：登录注册，加入购物车，付款，退换货，维修保养，开发票，会员，优惠券</li>
                                        <li>预览地址： <a href="http://shop.e-caretech.net/" target="_blank" rel="noopener noreferrer">http://shop.e-caretech.net/</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </section >
                    <section className="projects">
                        <div className="icons">
                            <svg className="icon"><use xlinkHref="#icon-xiangmu"></use></svg>
                        </div>
                        <div className="info">
                            <h4 className="title">个人项目</h4>
                            <ul>
                                <li className="border card">
                                    <a href="https://shenfeng1945.github.io/FlyVue/">FlyVue UI</a>
                                    <p className="project-con">该项目参照Element UI和blueprint库设计思路，做的一个基于Vue的简易UI组件库，目前支持按钮、输入框、布局、Tabs、Upload、Table等组件。每个组件包含从需求分析到Mocha单元测试，并基于TravisCI实现持续集成，最终以VuePress制作官方文档。</p>
                                    <ul className="project-con">
                                        <li>技术栈：Vue + VuePress + Mocha + TravisCI</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/FlyVue" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/FlyVue</a></li>
                                        <li>预览地址： <a href="https://shenfeng1945.github.io/FlyVue/" target="_blank" rel="noopener noreferrer">https://shenfeng1945.github.io/FlyVue/</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="https://shenfeng1945-sticky.netlify.com">Sticky在线便利贴</a>
                                    <p className="project-con">利用Github授权登录，配合JWT，生成你自己的便利贴，可以添加，删除内容，标记重要程度和是否完成，同时支持按星级和创建时间进行排序，便于管理查看你的内容，是一个记录日常生活的实用小工具。</p>
                                    <ul className="project-con">
                                        <li>技术栈：Vue + Express + Sequelize + Oauth2 + Jquery</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/sticky-note-vue/tree/dev" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/sticky-note-vue/tree/dev</a></li>
                                        <li>预览地址： <a href="https://shenfeng1945-sticky.netlify.com" target="_blank" rel="noopener noreferrer">https://shenfeng1945-sticky.netlify.com</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a>IM即时通讯应用</a>
                                    <p className="project-con">基于环信IMSDK搭建一个IM系统，包含单聊，登录，注册，更换头像，搜索用户，添加好友等模块。</p>
                                    <ul className="project-con">
                                        <li>技术栈:React全家桶 + Express + Mongoose + Mlab</li>
                                        <li>由于环信SDK不支持查看所有用户和设置头像功能，后台起着保存用户信息的作用。</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/react-im" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/react-im</a></li>
                                        <li>预览地址： <a href="https://react-im.netlify.com" target="_blank" rel="noopener noreferrer">https://react-im.netlify.com</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a>CloudSearch</a>
                                    <p className="project-con">这是一个集成了Github搜索，音乐搜索和音乐播放的应用，配合RxJS旨在学习响应式编程在项目中的应用。</p>
                                    <ul className="project-con">
                                        <li>技术栈: Angular/Cli + RxJS</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/angular-mix" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/angular-mix</a></li>
                                        <li>预览地址： <a href="https://cloudsearch.netlify.com" target="_blank" rel="noopener noreferrer">https://cloudsearch.netlify.com</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section >
                    <ul className="links">
                        <p>博客: <a href="https://github.com/shenfeng1945/blog/issues" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/blog/issues</a></p>
                        <p>Github: <a href="https://www.github.com/shenfeng1945" target="_blank" rel="noopener noreferrer">https://www.github.com/shenfeng1945</a></p>
                    </ul>
                </main >
            </div >
        )
    }
}
