import React, { Component } from 'react'
// import AppTab from './container/AppTab'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

// import Login from './container/Login'
// home识图
import Picture from './container/home/Picture'
// home识字
import Chinese from './container/home/Chinese'
// home催眠曲
import Song from './container/home/Song'
// home睡前故事
import Story from './container/home/Story'
// home小游戏
import Youxi from './container/home/Youxi'
// wiki宝宝饮食
import BabyFood from './container/wiki/BabyFood'
// wiki潮娃穿搭
import Chaowa from './container/wiki/Chaowa'
// wiki亲子教育
import Edu from './container/wiki/Edu'
// wiki宝宝护理
import Nurse from './container/wiki/Nurse'
// health抑郁症
import Yiyu from './container/health/Yiyu'
// health身材恢复
import Reply from './container/health/Reply'
// health饮食
import Food from './container/health/Food'
// health焦虑
import Anxiety from './container/health/Anxiety'
//my关注
// import Focus from './container/my/Focus'
// my收藏
import Collect from './container/my/Collect'
// my 通用设置
import Tongyong from './container/my/Tongyong'
// my 个人页面
import Unique from './container/my/Unique'
// my个人页面
import My from './container/My'
// 登录
import Login from './container/Login'
// 注册
import Register from './container/Register'
// wiki宝宝饮食详情页
import Detail from './container/Detail'
import Dairty from './container/home/Dairty'
import Message from './container/home/Message'
//wiki百科详情页
import Baike1 from './container/wiki/Baike1'
import Baike2 from './container/wiki/Baike2'
import Baike3 from './container/wiki/Baike3'
//亲子游戏详情页
import Youxi1 from './container/wiki/Youxi1'
import Youxi2 from './container/wiki/Youxi2'
import Youxi3 from './container/wiki/Youxi3'
import Youxi4 from './container/wiki/Youxi4'
import Youxi5 from './container/wiki/Youxi5'
import Youxi6 from './container/wiki/Youxi6'
import TuiNa from './container/wiki/TuiNa'
import Publish from './container/my/Publish'
import Feedback from './container/my/Feedback'


// // tab底部导航AppHome
// import AppHome from './container/AppHome.js'
// // tab底部导航Wiki
// import Wiki from './container/Wiki.js'
// // tab底部导航Add
// import Add from './container/Add.js'
// // tab底部导航Health
// import Health from './container/Health.js'

import AppTab from './container/AppTab.js'

export default class App extends Component {
    render() {
        return (
            <div>
                 <AppTab/>
            </div>
        )
    }
}