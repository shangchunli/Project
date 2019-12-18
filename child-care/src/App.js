import React, { Component } from 'react'
import AppTab from './container/AppTab'
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


export default class App extends Component {
    render() {
        return (
            <div>
                 <div>
                 </div>
                <Router>
                    <div>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/reg' component={Register}/>
                        <Route exact path='/home' component={AppTab}/>
                        <Route exact path='/wiki' component={AppTab}/>
                        <Route exact path='/add' component={AppTab}/>
                        <Route exact path='/health' component={AppTab}/>
                        <Route exact path='/my' component={AppTab}/>
                        <Route  path='/home/picture' component={Picture}/>
                        <Route  path='/home/chinese' component={Chinese}/>
                        <Route  path='/home/song' component={Song}/>
                        <Route  path='/home/story' component={Story}/>
                        <Route  path='/home/youxi' component={Youxi}/>
                        <Route  exact path='/wiki/nurse' component={Nurse}/>
                        <Route  exact path='/wiki/edu' component={Edu}/>
                        <Route  exact path='/wiki/chaowa' component={Chaowa}/>
                        <Route  exact path='/wiki/babyfood' component={BabyFood}/>
                        <Route  exact path='/health/yiyu' component={Yiyu}/>
                        <Route  exact path='/health/reply' component={Reply}/>
                        <Route  exact path='/health/food' component={Food}/>
                        <Route  exact path='/health/anxiety' component={Anxiety}/>
                        {/* <Route  exact path='/my/focus' component={Focus}/> */}
                        <Route  exact path='/my/collect' component={Collect}/>
                        <Route  exact path='/my/tongyong' component={Tongyong}/>
                        <Route  exact path='/my/unique' component={Unique}/>
                        <Route  exact path='/my' component={My}/>
                        <Route path='/wiki/detail/:id' component={Detail}/>
                        <Route path='/health/detail/:id' component={Detail}/>
                        <Route path='/home/detail/:id' component={Dairty}/>
                        <Route path='/home/message' component={Message}/>
                        <Route exact path='/wiki/baike1'component={Baike1}/>
                        <Route exact path='/wiki/baike2'component={Baike2}/>
                        <Route exact path='/wiki/baike3'component={Baike3}/>
                        <Route exact path='/wiki/youxi1'component={Youxi1}/>
                        <Route exact path='/wiki/youxi2'component={Youxi2}/>
                        <Route exact path='/wiki/youxi3'component={Youxi3}/>
                        <Route exact path='/wiki/youxi4'component={Youxi4}/>
                        <Route exact path='/wiki/youxi5'component={Youxi5}/>
                        <Route exact path='/wiki/youxi6'component={Youxi6}/>
                        {/* <Route path='/wiki/nurse1/detail/:id' component={Detail}/>
                        <Route path='/wiki/babyfood/detail/:id' component={Detail}/>
                        <Route path='/wiki/chaowa/detail/:id' component={Detail}/>
                        <Route path='/wiki/edu/detail/:id' component={Detail}/>
 */}
                    </div>
                 </Router>
            </div>
        )
    }
}