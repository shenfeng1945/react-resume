import React, { Component } from 'react'
import './index.css'

export default class Skill extends Component {
    render() {
        return (
            <div className="skill-page">
                <h2 className="tabs-content-head">Skills</h2>
                <div className="skill-info">
                    <ul className="skill-list skill-left">
                        <li className="skill">
                            <div className="skill-head">
                                <div className="float-icon first"></div>
                                <h3 className="first">静态页面制作技术</h3>
                            </div>
                            <ol className="skill-con">
                                <li>
                                    <span>像素级</span>还原设计稿，可以实现
                            <span>响应式</span>以适应手机屏幕</li>
                                <li>
                                    <span>CSS3动画</span>、
                            <span>Flex布局</span>、
                            <span>Grid布局</span>、
                            <span>CSS2布局</span>
                                </li>
                            </ol>
                        </li>
                        <li className="skill">
                            <div className="skill-head">
                                <div className="float-icon second"></div>
                                <h3 className="second">熟练掌握原生JavaScript</h3>
                            </div>
                            <ol className="skill-con">
                                <li>掌握
                            <span>原型</span>、
                            <span>闭包</span>、
                            <span>作用域链</span>、
                            <span>面向对象</span>、
                            <span>事件循环</span>、
                            <span>异步流程控制</span>等概念。</li>
                                <li>能够进行模块化编程，使用
                            <span>Gulp</span>、
                            <span>RequireJS</span>、
                            <span>Webpack</span>等多种方式处理工作流。</li>
                                <li>能够对复杂函数进行功能化封装，并编写类似jQuery常用的基本功能性插件</li>
                                <li>熟悉
                            <span>ES6</span>部分新特性</li>
                            </ol>
                        </li>
                        <li className="skill">
                            <div className="skill-head">
                                <div className="float-icon third"></div>
                                <h3 className="third">移动端页面</h3>
                            </div>
                            <ol className="skill-con">
                                <li>熟悉
                            <span>移动端</span>页面的开发流程</li>
                                <li>能够使用
                            <span>动态REM</span>适配所有的手机屏幕</li>
                            </ol>
                        </li>
                    </ul>
                    <ul className="skill-list skill-right">
                        <li className="skill">
                            <div className="skill-head">
                                <div className="float-icon fourth"></div>
                                <h3 className="fourth">与后端配合开发</h3>
                            </div>
                            <ol className="skill-con">
                                <li>了解
                            <span>HTTP协议</span>及
                            <span>浏览器渲染原理</span>
                                </li>
                                <li>了解
                            <span>前端安全</span>、网站
                            <span>性能优化</span>
                                </li>
                                <li>熟悉
                            <span>AJAX</span>、
                            <span>Promise</span>、
                            <span>CORS</span>、
                            <span>JSONP</span>
                                </li>
                                <li>能够使用
                            <span>Node.js</span>搭建
                            <span>静态服务器</span>进行基本后台开发</li>
                            </ol>
                        </li>
                        <li className="skill">
                            <div className="skill-head">
                                <div className="float-icon fifth"></div>
                                <h3 className="fifth">其他</h3>
                            </div>
                            <ol className="skill-con">
                                <li>熟悉
                            <span>Npm</span>、
                            <span>Git</span>的基本使用</li>
                                <li>了解Less/Sass/PostCSS/Autoprefixer等CSS预处理和模块化工具</li>
                                <li>掌握基本的
                            <span>数据结构</span>和
                            <span>算法</span>
                                </li>
                                <li>熟悉<span>Vue</span>及相关插件的使用</li>
                                <li>了解
                            <span>React</span>的使用</li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
