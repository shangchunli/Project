
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppHome from './AppHome';
import Wiki from './Wiki';
import My from './My';
import Health from './Health'
import Jia from './Jia'

// home
import Picture from './home/Picture'
import Chinese from './home/Chinese'
import Song from './home/Song'
import Story from './home/Story'
import Youxi from './home/Youxi'
import Photo from './home/Photo';

// wiki宝宝饮食
import BabyFood from './wiki/BabyFood'
import Chaowa from './wiki/Chaowa'
import Edu from './wiki/Edu'
import Nurse from './wiki/Nurse'
// wiki搜索页
import Search from './Search'

// health
// import Yiyu from './health/Yiyu'
// import Reply from './health/Reply'
// import Food from './health/Food'
// import Anxiety from './health/Anxiety'
import Tests from './health/Tests';
import AFood from './health/After/AFood';
import AAnxiety from './health/After/AAnxiety';
import AYiyu from './health/After/AYiyu';
import AExercise from './health/After/AExercise';
import BAnxiety from './health/Before/BAnxiety';
import BExecirse from './health/Before/BExecirse';
import BYiyu from './health/Before/BYiyu';
import BFood from './health/Before/BFood';

//my
import Collect from './my/Collect'
import Tongyong from './my/Tongyong'
import Unique from './my/Unique'
import Feedback from './my/Feedback'


// 登录
import Login from './Login'
// 注册
import Register from './Register'
// wiki宝宝饮食详情页
import Detail from './Detail1'
import Dairty from './home/Dairty'
import Message from './home/Message'
//wiki百科详情页
import Baike1 from './wiki/Baike1'
import Baike2 from './wiki/Baike2'
import Baike3 from './wiki/Baike3'
//亲子游戏详情页
import Youxi1 from './wiki/Youxi1'
import Youxi2 from './wiki/Youxi2'
import Youxi3 from './wiki/Youxi3'
import Youxi4 from './wiki/Youxi4'
import Youxi5 from './wiki/Youxi5'
import Youxi6 from './wiki/Youxi6'
import TuiNa from './wiki/TuiNa'
import Publish from './my/Publish'
// 话题圈
import Topic from './wiki/Topic';
import Addtopic from './wiki/Addtopic';
import TopicDetail from './wiki/TopicDetail';


import BAnxiety from './health/Before/BAnxiety';
import BExecirse from './health/Before/BExecirse';
import Serve from './my/Serve';

// 电子相册
import Pictures from './my/Pictures'
import Pictures1 from './my/Pictures1'
import Pictures2 from './my/Pictures2'



export default class Bottom extends Component {
  constructor(props){
    super(props);
    this.state={
      showElem:'',
      selectedTabNum:''
    }
  }
 
  render() {
    return (
      <Router>
        <Route exact path='/home' component={AppHome} />
        <Route exact path='/wiki' component={Wiki} />
        <Route exact path='/jia' component={Jia} />
        <Route exact path='/health' component={Health} />
        <Route exact path='/my' component={My} />


        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/reg' component={Register} />


        <Route exact path='/home/picture' component={Picture} />
        <Route exact path='/home/chinese' component={Chinese} />
        <Route exact path='/home/song' component={Song} />
        <Route exact path='/home/story' component={Story} />
        <Route exact path='/home/youxi' component={Youxi} />
        <Route exact path='/home/photo' component={Photo} />

        <Route exact path='/wiki/nurse' component={Nurse} />
        <Route exact path='/wiki/edu' component={Edu} />
        <Route exact path='/wiki/chaowa' component={Chaowa} />
        <Route exact path='/wiki/tuina' component={TuiNa} />
        <Route exact path='/wiki/babyfood' component={BabyFood} />
        <Route exact path='/search' component={Search} />


        {/* <Route exact path='/health/yiyu' component={Yiyu} />
        <Route exact path='/health/reply' component={Reply} />
        <Route exact path='/health/food' component={Food} />
        <Route exact path='/health/anxiety' component={Anxiety} /> */}

        <Route exact path='/health/before/yiyu' component={BYiyu} />
        <Route exact path='/health/before/food' component={BFood} />
        <Route exact path='/health/before/anxiety' component={BAnxiety} />
        <Route exact path='/health/before/exercise' component={BExecirse} />
        <Route exact path='/health/after/food' component={AFood} />
        <Route exact path='/health/after/anxiety' component={AAnxiety} />
        <Route exact path='/health/after/yiyu' component={AYiyu} />
        <Route exact path='/health/after/exercise' component={AExercise} />       
        <Route exact path='/health/test' component={Tests} />
        
        {/* <Route  exact path='/my/publish' component={Publish}/> */}
        <Route exact path='/my/collect' component={Collect} />
        <Route exact path='/my/tongyong' component={Tongyong} />
        <Route exact path='/my/unique' component={Unique} />
        <Route exact path='/my/publish' component={Publish}/>

        <Route exact path='/my/serve' component={Serve}/>

        <Route exact path='/my/feedback' component={Feedback}/>


        {/* <Route  exact path='/my' component={My}/> */}
        <Route path='/wiki/detail/:id' component={Detail} />
        <Route path='/health/detail/:id' component={Detail} />
        <Route path='/home/detail/:id' component={Dairty} />
        <Route path='/home/message' component={Message} />
        <Route exact path='/wiki/baike1' component={Baike1} />
        <Route exact path='/wiki/baike2' component={Baike2} />
        <Route exact path='/wiki/baike3' component={Baike3} />
        <Route exact path='/wiki/youxi1' component={Youxi1} />
        <Route exact path='/wiki/youxi2' component={Youxi2} />
        <Route exact path='/wiki/youxi3' component={Youxi3} />
        <Route exact path='/wiki/youxi4' component={Youxi4} />
        <Route exact path='/wiki/youxi5' component={Youxi5} />
        <Route exact path='/wiki/youxi6' component={Youxi6} />

        {/* 话题圈 */}
        <Route exact path='/wiki/topic' component={Topic}/>
        <Route exact path='/wiki/topic/add' component={Addtopic}/>
        <Route path='/wiki/topic/detail/:id' component={TopicDetail} />

        {/* 电子相册 */}
        <Route exact path='/my/pictures'component={Pictures}/>
        <Route exact path='/my/pictures1'component={Pictures1}/>
        <Route exact path='/my/pictures2'component={Pictures2}/>
      </Router>
    )
  }
}
