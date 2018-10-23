import React, { Component } from 'react'
import './index.css'

export default class Skill extends Component {
    render() {
        return (
            <div className="skill-page">
                <h2 className="tabs-content-head">Skills</h2>
                <div className="skill-info">
                    <ul>
                        <li>熟练掌握HTML(5)和常用CSS(3)，具有<span className="highlight">像素级</span>还原设计稿的能力。</li>
                        <li>熟练掌握原生Javascript，掌握重要概念如：
                         <span className="highlight">原型</span>、
                         <span className="highlight">闭包</span>、
                         <span className="highlight">作用域链</span>、
                         <span className="highlight">面向对象</span>、
                         <span className="highlight">事件循环</span>、
                         <span className="highlight">异步流程控制</span>等概念。
                         能够根据面向对象思想利用JS/jQuery<span className="highlight">封装</span>常用插件。 熟练使用<span className="highlight">ES6及ES7</span>部分新特性。
                       </li>
                        <li>
                            熟悉<span className="highlight">Angular框架</span>，能够独立架构小型angular项目，理解重要概念如: 生命周期，装饰器，单例服务等。能够封装功能组件和指令，配合RxJS控制异步流程。
                       </li>
                    </ul>
                    <ul>
                        <li>了解<span className="highlight">React框架</span>及相关流行库的使用，理解重要概念如: 生命周期，虚拟Dom，redux原理等.</li>
                        <li>了解
                           <span className="highlight">HTTP协议</span>,及浏览器常见特性如: 
                           <span className="highlight">事件机制</span>、
                           <span className="highlight">跨域</span>、
                           <span className="highlight">缓存</span>、
                           和<span className="highlight">渲染机制</span>
                           等，了解<span className="highlight">前端安全</span>
                           和<span className="highlight">性能优化策略</span>。
                       </li>
                        <li>熟悉<span className="highlight">Yarn & Npm & Git</span>，能够使用Node.js搭配Express进行基本后台开发。</li>
                        <li>熟悉<span className="highlight">CMD&AMD机制</span>，熟悉<span className="highlight">Webpack打包</span>，及优化手段。</li>
                        <li>掌握基本的
                                    <span>数据结构</span>和
                                    <span>算法</span>。
                        </li>
                    </ul>
                </div>
                {/* <div className="table-cell">
                  <div className="tag-panel">
                    <div className="tag">HTML5</div>
                    <div className="tag">CSS3</div>
                    <div className="tag">JavaScript</div>
                    <div className="tag">TypeScript</div>
                  </div>
                  <div className="tag-panel">
                    <div className="tag">Angualr</div> 
                    <div className="tag">React</div> 
                    <div className="tag">Vue</div> 
                    <div className="tag">JQuery</div> 
                  </div>
                </div> */}
            </div>
        )
    }
}
