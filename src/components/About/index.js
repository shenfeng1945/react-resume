import React, { Component } from 'react'
import './index.css'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h2 className="tabs-content-head">About Me</h2>
                <main>
                    <div className="profile-image">
                        <div className="img-container">
                            <img src="http://codetic.net/demo/themes/privado/wp-content/themes/privado/img/avatar.png" alt="头像" />
                        </div>
                        <h2>刘智超</h2>
                        <h3>前端开发 Front-End Web Developer</h3>
                    </div>
                    <div className="bio">
                        <div className="bio-inner">
                            <div className="bio-description">
                                <p>热爱计算机科学和互联网技术，关注Web发展，对新技术充满激情，良好的学习习惯，自学能力强。热爱生活，喜欢每天都富有激情的工作状态。性格乐观，能积极面对压力。</p>
                                <p>教育背景: 理学学士
                                    <small>(2011-2015)</small>
                                </p>
                                <p>工作经历：上映科技(2017.11-2018.3) Web工程师</p>
                                <p>熟悉 HTML、CSS、Javascript，能熟练开发符合 W3C 标准的页面，熟练使用jQuery，有良好的编码习惯以及熟练使用开发调试工具。无分号，空格缩进拥护者。</p>
                            </div>
                            <div className="buttons">
                                <a className="btn" href="mailto:liuzhichao1993@foxmail.com">Hire Me</a>
                                <a className="btn" href="./刘智超-前端开发.pdf" target="_blank">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
