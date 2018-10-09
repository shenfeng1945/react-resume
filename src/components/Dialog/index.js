import React, { Component } from 'react';
import './index.css'
import eventEmitter from '../../utils/event'

class Dialog extends Component {
    constructor(){
        super()
        this.state = {
            url: ''
        }
    }
    handleClose = () => {
        this.setState({url: ''})
    }
    componentWillMount(){
        eventEmitter.on('dialog',this.handleDialog)
    }
    handleDialog = (val) => {
       this.setState({url: val})
    }
    render() {
        if(this.state.url){
            return (
                <div className="dialog-wrapper">
                    <div className="dialog">
                      <video preload="auto" controls className="video">
                        <source src={this.state.url} type="video/mp4" />
                      </video>
                      <div className="close" onClick={this.handleClose}>
                         <svg className="icon">
                             <use xlinkHref="#icon-close"></use>
                         </svg>
                      </div>
                    </div> 
                </div>
            );
        }else{
            return null
        }
       
    }
}

export default Dialog;