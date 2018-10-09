import React, { Component } from 'react'
import './index.css'

export default class ResumePdf extends Component {
    render() {
        return (
            <div className="resume-pdf">
                <header>
                    <div className="head">
                        <p><strong>在线简历：</strong><a href="https://shenfeng1945.github.io/resume" target="_blank" rel="noopener noreferrer">https://shenfeng1945.github.io/resume</a></p>
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
                                <p>上映科技,2017.11-2018.3,Web工程师</p>
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
                                    <h3 className="skill-head">静态页面制作技术</h3>
                                    <ul className="skill-con">
                                        <li>像素级还原设计稿，可以实现响应式以适应手机屏幕</li>
                                        <li>CSS3动画、Flex布局、Grid布局、CSS2布局</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">熟练掌握原生JavaScript</h3>
                                    <ul className="skill-con">
                                        <li>掌握原型、闭包、作用域链、面向对象、异步流程控制、事件循环等概念。</li>
                                        <li>能够进行模块化编程，使用Gulp、RequireJS、Webpack等多种方式处理工作流。</li>
                                        <li>能够对复杂函数进行功能化封装，并编写类似jQuery常用的基本功能性插件</li>
                                        <li>熟悉ES6部分新特性</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">移动端页面</h3>
                                    <ul className="skill-con">
                                        <li>熟悉手机端页面的开发流程</li>
                                        <li>能够使用动态REM适配所有的手机屏幕</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">与后端配合开发</h3>
                                    <ul className="skill-con">
                                        <li>了解HTTP协议及浏览器渲染原理</li>
                                        <li>了解前端安全、网站性能优化</li>
                                        <li>熟悉AJAX、Promise、CORS、JSONP</li>
                                        <li>能够使用Node.js搭建静态服务器进行基本后台开发</li>
                                    </ul>
                                </li>
                                <li className="skill card border">
                                    <h3 className="skill-head">其他</h3>
                                    <ul className="skill-con">
                                        <li>熟悉Npm、Git的基本使用</li>
                                        <li>了解Less/Sass/PostCSS/Autoprefixer等CSS预处理和模块化工具</li>
                                        <li>掌握基本的数据结构和算法</li>
                                        <li>熟悉Vue及相关插件的使用</li>
                                        <li>了解React的使用</li>
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
                                    <a href="http://shop.e-caretech.net/">惠护爱真</a>
                                    <p className="project-con">这是一个护理，保健仪器类的商城管理平台,拥有移动端页面，后台管理页面和网点端页面。后台可以发布各种类型商品，商城页面可以登陆后，填写自己的收获地址并支付购买，订单确定后，对应网点的客服人员会帮你送货上门，并上门安装，之后还可以享受维修和保养服务。</p>
                                    <ul className="project-con">
                                        <li>功能：登录注册，加入购物车，付款，退换货，维修保养，开发票，会员，优惠券</li>
                                        <li>预览地址： <a href="http://shop.e-caretech.net/" target="_blank" rel="noopener noreferrer">http://shop.e-caretech.net/</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="http://shenfeng1945.top/tesla-game">特斯拉赛车游戏</a>
                                    <p className="project-con">几百人同时玩这个赛车竞速游戏，控制刹车和加速，在规定时间内跑完全程，车通过随机出现的路障时有速度限制，超过了就要扣分，并计入总成绩，最终看谁用时最短。</p>
                                    <ul className="project-con">
                                        <li>实现：通过Canvas API不断绘制图形，达到动画效果。</li>
                                        <li>项目地址： <a href="https://www.github.com/shenfeng1945/tesla-game" target="_blank" rel="noopener noreferrer">https://www.github.com/shenfeng1945/tesla-game</a></li>
                                        <li>预览地址： <a href="http://shenfeng1945.top/tesla-game" target="_blank" rel="noopener noreferrer">http://shenfeng1945.top/tesla-game</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="http://shenfeng1945.top/ad-system">上映科技广告平台</a>
                                    <p className="project-con">公司广告发布系统，现只有静态页面，暂无数据交互</p>
                                    <ul className="project-con">
                                        <li>实现：Jquery+CSS3</li>
                                        <li>项目地址： <a href="https://www.github.com/shenfeng1945/ad-system" target="_blank" rel="noopener noreferrer">https://www.github.com/shenfeng1945/ad-system</a></li>
                                        <li>预览地址： <a href="http://shenfeng1945.top/ad-system" target="_blank" rel="noopener noreferrer">http://shenfeng1945.top/ad-system</a></li>
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
                            <h4 className="title">个人项目</h4>
                            <ul>
                                <li className="border card">
                                    <a href="http://shenfeng1945.top/vue-youzan/dist">Vue重构有赞商城</a>
                                    <p className="project-con">使用Vue重构有赞商城以及多页面的应用,使用Rap模拟数据。旨在熟悉vue在项目中的具体应用。</p>
                                    <ul className="project-con">
                                        <li>技术栈：vue-cli+Router+Vuex+Rap</li>
                                        <li>项目地址： <a href="https://www.github.com/shenfeng1945/vue-youzan" target="_blank" rel="noopener noreferrer">https://www.github.com/shenfeng1945/vue-youzan</a></li>
                                        <li>预览地址： <a href="http://shenfeng1945.top/vue-youzan/dist" target="_blank" rel="noopener noreferrer">http://shenfeng1945.top/vue-youzan/dist</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="#">英雄联盟仿站</a>
                                    <p className="project-con">这是一个PC端的静态网页，像素级还原英雄联盟官网</p>
                                    <ul className="project-con">
                                        <li>技术栈:jQuery + ES6 + CSS3</li>
                                        <li>该项目目的在于能够精确还原原稿的每一个细节，提升自己的css/html水平</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/demojs/tree/master/lol-page" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/demojs/tree/master/lol-page</a></li>
                                        <li>预览地址： <a href="https://shenfeng1945.github.io/demojs/lol-page" target="_blank" rel="noopener noreferrer">https://shenfeng1945.github.io/demojs/lol-page</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="#">在线Canvas画板</a>
                                    <p className="project-con">这是一个PC端的在线画板，能在上面画东西</p>
                                    <ul className="project-con">
                                        <li>功能: 调色且颜色可自定义、添加图形、改变画笔粗细、橡皮擦、图片导出下载和预览</li>
                                        <li>实现: 使用jQuery、Canvas API和双向绑定实现一个多功能的PC端在线画板</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/Canvas" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/Canvas</a></li>
                                        <li>预览地址： <a href="https://shenfeng1945.github.io/Canvas" target="_blank" rel="noopener noreferrer">https://shenfeng1945.github.io/Canvas</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="#">移动端网易云音乐</a>
                                    <p className="project-con">这是一个网易云音乐手机端播放页面应用。能够实现曲库列表实时更新、搜索数据请求、歌曲播放、暂停、重新播放等效果</p>
                                    <ul className="project-con">
                                        <li>功能: 歌曲播放、歌单实时更新、曲库搜索、歌词滚动</li>
                                        <li>部署：LeanCloud + 七牛云</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/NetEaseMusic" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/NetEaseMusic</a></li>
                                        <li>预览地址： <a href="https://shenfeng1945.github.io/NetEaseMusic/jump.html" target="_blank" rel="noopener noreferrer">https://shenfeng1945.github.io/NetEaseMusic/jump.html</a></li>
                                    </ul>
                                </li>
                                <li className="border card">
                                    <a href="#">在线Todo应用</a>
                                    <p className="project-con">使用React实现代办事项管理</p>
                                    <ul className="project-con">
                                        <li>这是一个在线代办事项管理应用，支持注册，支持增删改查，云同步，视图切换等功能</li>
                                        <li>技术栈：React + ES6 + LeanCloud后端服务</li>
                                        <li>项目地址： <a href="https://github.com/shenfeng1945/React-Todo" target="_blank" rel="noopener noreferrer">https://github.com/shenfeng1945/React-Todo</a></li>
                                        <li>预览地址： <a href="https://shenfeng1945.github.io/React-Todo/build/" target="_blank" rel="noopener noreferrer">https://shenfeng1945.github.io/React-Todo/build/</a></li>
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
