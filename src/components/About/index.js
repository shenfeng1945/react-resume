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
                            {/* <img src="http://codetic.net/demo/themes/privado/wp-content/themes/privado/img/avatar.png" alt="头像" /> */}
                            <img src="https://i.loli.net/2019/12/10/PKlzGbLWTauivBC.png" alt="头像"/>
                        </div>
                        <h2>刘智超</h2>
                        <h3>前端开发 Front-End Web Developer</h3>
                    </div>
                    <div className="bio">
                        <div className="bio-inner">
                            <div className="bio-description">
                                <p>热爱计算机科学和互联网技术，关注Web发展，对新技术充满激情，良好的学习习惯，自学能力强。热爱生活，喜欢每天都富有激情的工作状态。性格乐观，能积极面对压力。</p>
                                <p>熟悉 HTML、CSS、Javascript，能熟练使用Angular和React，有良好的编码习惯。</p>
                                <p>教育背景: 理学学士
                                    <small>(2011-2015)</small>
                                </p>
                                <div className="work-experience">
                                    <span>工作经历:</span>
                                    <ol>
                                        <li>上映科技(2017.10-2018.3) 前端工程师</li>
                                        <li>天体万物智能科技(2018.4-2018.10) 前端工程师</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="buttons">
                                <a className="btn" href="mailto:liuzhichao1993@foxmail.com">Hire Me</a>
                                <a className="btn" href="https://shenfeng1945.xyz/resume/刘智超-前端开发.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
