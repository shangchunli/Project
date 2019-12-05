import React, { Component } from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile';

export default class Login extends Component {
    render() {
         return (
            <div>
                <List>
                    <InputItem
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <InputItem
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                </List>
            </div>
        )
    }
}
