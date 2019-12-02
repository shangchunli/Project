import React, { Component } from 'react'
import AppTab from './container/AppTab'
import Login from './Login'
export default class App extends Component {
    render() {
        return (
            <div>
                <AppTab/>
                {/* <Login/> */}
            </div>
        )
    }
}