import React, { Component } from 'react'
import './index.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-page">
                <h2 className="tabs-content-head">Contact</h2>
                <div className="contacts">
                    <ul className="location">
                        <li>
                            <i>
                                <svg className="icon-con">
                                    <use xlinkHref="#icon-email-copy"></use>
                                </svg>
                            </i>
                            <p>liuzhichao1993@foxmail.com</p>
                        </li>
                        <li>
                            <i>
                                <svg className="icon-con">
                                    <use xlinkHref="#icon-qq"></use>
                                </svg>
                            </i>
                            <p>823902826</p>
                        </li>
                        <li>
                            <i>
                                <svg className="icon-con">
                                    <use xlinkHref="#icon-phoneinner"></use>
                                </svg>
                            </i>
                            <p>13296504457</p>
                        </li>
                        <li>
                            <i>
                                <svg className="icon-con">
                                    <use xlinkHref="#icon-locationicon"></use>
                                </svg>
                            </i>
                            <p>深圳，广东</p>
                        </li>
                        <li>
                            <i>
                                <svg className="icon-con">
                                    <use xlinkHref="#icon-weixin"></use>
                                </svg>
                            </i>
                            <img src="//i.loli.net/2017/09/21/59c320aa120d7.png" alt="微信图片" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
