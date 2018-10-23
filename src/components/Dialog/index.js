import React, { Component } from 'react';
import './index.css'
import eventEmitter from '../../utils/event'

class Dialog extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
            isVideo: true,
            avatar: ''
        }
    }
    handleClose = () => {
        this.setState({ url: '',isVideo: true,avatar: '' })
    }
    componentWillMount() {
        eventEmitter.on('dialog', this.handleDialog)
    }
    handleDialog = (data) => {
        if (!data.isVideo) {
            this.setState({ url: data.url, avatar: data.avatar, isVideo: false })
        } else {
            this.setState({ url: data.url, isVideo: true })
        }
    }
    render() {
        if (this.state.url) {
            return (
                <div className="dialog-wrapper">
                    <div className="dialog">
                        {
                            this.state.isVideo ?
                                <video preload="auto" controls className="video">
                                    <source src={this.state.url} type="video/mp4" />
                                </video> :
                                <div className="wechat">
                                    <div>
                                      <p>使用微信扫一扫打开</p>
                                      <img src={this.state.avatar} alt="" className="avatar" />
                                    </div>
                                    <div>
                                     <p>直接打开</p>
                                    <a href={this.state.url} target="_blank" rel="noopener noreferrer">{this.state.url}</a>
                                    </div>
                                </div>
                        }
                        <div className="close" onClick={this.handleClose}>
                            <svg className="icon">
                                <use xlinkHref="#icon-close"></use>
                            </svg>
                        </div>
                    </div>

                </div>
            );
        } else {
            return null
        }

    }
}

export default Dialog;