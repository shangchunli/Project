import React, { Component } from 'react'
import AppTab from './container/AppTab'
<<<<<<< HEAD

import {BrowserRouter as Router,Route,Link} from "react-router-dom"
=======
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
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
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
// wiki宝宝饮食
import BabyFood from './container/wiki/BabyFood'
// wiki潮娃穿搭
import Chaowa from './container/wiki/Chaowa'
// wiki亲子教育
import Edu from './container/wiki/Edu'
// wiki宝宝护理
import Nurse from './container/wiki/Nurse'
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
// health抑郁症
import Yiyu from './container/health/Yiyu'
// health身材恢复
import Reply from './container/health/Reply'
// health饮食
import Food from './container/health/Food'
// health焦虑
import Anxiety from './container/health/Anxiety'
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
//my关注
import Focus from './container/my/Focus'
// my收藏
import Collect from './container/my/Collect'
// my 通用设置
import Tongyong from './container/my/Tongyong'
// my 个人页面
import Unique from './container/my/Unique'
// my个人页面
import My from './container/My'
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
// 登录
import Login from './container/Login'
// 注册
import Register from './container/Register'
<<<<<<< HEAD







// wiki宝宝饮食详情页
import Detail1 from './container/Detail1'
//百科知识详情页
import Baike1 from './container/wiki/Baike1'
//宝宝信息
=======
// wiki宝宝饮食详情页
import Detail from './container/Detail'
import Dairty from './container/home/Dairty'
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
import Message from './container/home/Message'
export default class App extends Component {
    
    render() {
        return (

            <div>
                 <div>
<<<<<<< HEAD
                    {/* <Login/>
                    <Register/> */}
                 </div>
                <Router>
                    
                    <div>
                        {/* <Route exact path='/' component={AppTab}/> */}
                        <Route exact path='/' component={Login}/>

                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/reg' component={Register}/>

=======
                 </div>
                <Router>
                    <div>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/reg' component={Register}/>
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
                        <Route exact path='/home' component={AppTab}/>
                        <Route exact path='/wiki' component={AppTab}/>
                        <Route exact path='/add' component={AppTab}/>
                        <Route exact path='/health' component={AppTab}/>
                        <Route exact path='/my' component={AppTab}/>
<<<<<<< HEAD

            
=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
                        <Route  path='/home/picture' component={Picture}/>
                        <Route  path='/home/chinese' component={Chinese}/>
                        <Route  path='/home/song' component={Song}/>
                        <Route  path='/home/story' component={Story}/>
                        <Route  path='/home/youxi' component={Youxi}/>
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
                        <Route  exact path='/wiki/nurse' component={Nurse}/>
                        <Route  exact path='/wiki/edu' component={Edu}/>
                        <Route  exact path='/wiki/chaowa' component={Chaowa}/>
                        <Route  exact path='/wiki/babyfood' component={BabyFood}/>
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
                        <Route  exact path='/health/yiyu' component={Yiyu}/>
                        <Route  exact path='/health/reply' component={Reply}/>
                        <Route  exact path='/health/food' component={Food}/>
                        <Route  exact path='/health/anxiety' component={Anxiety}/>
<<<<<<< HEAD

=======
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
                        <Route  exact path='/my/focus' component={Focus}/>
                        <Route  exact path='/my/collect' component={Collect}/>
                        <Route  exact path='/my/tongyong' component={Tongyong}/>
                        <Route  exact path='/my/unique' component={Unique}/>
<<<<<<< HEAD

                        <Route  exact path='/my' component={My}/>


                        <Route exact path='/wiki/babyfood/detail/1' component={Detail1}/>
                        <Route exact path='/wiki/baike1'component={Baike1}/>
                        <Route exact path='/home/message'component={Message}/>
                    </div>
                    
                
=======
                        <Route  exact path='/my' component={My}/>
                        <Route path='/wiki/detail/:id' component={Detail}/>
                        <Route path='/home/detail/:id' component={Dairty}/>
                        <Route path='/home/Message' component={Message}/>
                        {/* <Route path='/wiki/nurse1/detail/:id' component={Detail}/>
                        <Route path='/wiki/babyfood/detail/:id' component={Detail}/>
                        <Route path='/wiki/chaowa/detail/:id' component={Detail}/>
                        <Route path='/wiki/edu/detail/:id' component={Detail}/>
 */}
                    </div>
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
                 </Router>
            </div>
           
        )
    }
}