import React, { Component } from 'react'
import './sui.css';
import Editor from './Add/Editor'
import registerServiceWorker from './Add/registerServiceWorker'

export default class Sui extends Component {
    render() {
        return (
            <div >
                <Editor/>
            </div>
        )
    }
}
registerServiceWorker();

