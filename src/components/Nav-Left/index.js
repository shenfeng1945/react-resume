import React, { Component } from 'react'
import './index.css'
import { NavLink } from "react-router-dom";

export default class NavLeft extends Component {
    render() {
        return (
            <nav className="left">
                <div className="title-icons">
                    <h2>简历 Resume</h2>
                    <div className="phone-icons active">
                        <svg className="p-icon open-icon">
                            <use xlinkHref="#icon-more"></use>
                        </svg>
                        <svg className="p-icon close-icon">
                            <use xlinkHref="#icon-close"></use>
                        </svg>
                    </div>
                </div >
                <ol>
                    <li className="tab-lists first active">
                        <NavLink exact to="/" activeClassName="active">
                            <div className="head">
                                <i className="sprite"></i>
                            </div>
                            <div className="content">个人 About Me</div>
                        </NavLink>
                    </li>
                    <li className="tab-lists second">
                        <NavLink to="/project" activeClassName="active">
                            <div className="head">
                                <i className="sprite"></i>
                            </div>
                            <div className="content">项目 Portfolio</div>
                        </NavLink>
                    </li>
                    <li className="tab-lists third">
                        <NavLink to="/skill" activeClassName="active">
                            <div className="head">
                                <i className="sprite"></i>
                            </div>
                            <div className="content">技能 Skills</div>
                        </NavLink>
                    </li>
                    <li className="tab-lists fourth">
                        <NavLink to="/contact" activeClassName="active">
                            <div className="head">
                                <i className="sprite"></i>
                            </div>
                            <div className="content">联系 Contact</div>
                        </NavLink>
                    </li>
                </ol>
                <footer className="links">
                    <div className="logo">
                        <a href="mailto:823902826@qq.com" title="Mail to me">
                            <svg>
                                <use xlinkHref="#icon-email"></use>
                            </svg>
                        </a>
                        <a href="https://github.com/shenfeng1945/blog/issues" rel="noopener noreferrer" target="_blank" title="My blog">
                            <svg>
                                <use xlinkHref="#icon-blog"></use>
                            </svg>
                        </a>
                        <a href="https://www.github.com/shenfeng1945" target="_blank" rel="noopener noreferrer" title="My Github">
                            <svg>
                                <use xlinkHref="#icon-github"></use>
                            </svg>
                        </a >
                        <a href="javascript:;">
                            <svg>
                                <use xlinkHref="#icon-weibotaidu"></use>
                            </svg>
                        </a >
                    </div >
                    <p>Open source:
                <a href="https://github.com/shenfeng1945/resume" target="_blank" rel="noopener noreferrer">Github</a>
                    </p>
                    <p>Made By shenfeng 2018</p>
                </footer >
            </nav >
        )
    }
}
