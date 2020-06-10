import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class ShowBottom extends Component {
  constructor(){
    super();
    this.state={
      background: ['url(./images/home.svg) center center /  21px 21px no-repeat',
                  'url(./images/baike.svg) center center /  21px 21px no-repeat',
                  'url(./images/xinzeng.svg) center center /  40px 40px no-repeat',
                  'url(./images/jiankang.svg) center center /  40px 40px no-repeat',
                  'url(./images/my.svg) center center /  40px 40px no-repeat'
                  ]
    }
  }
    jump=()=>{
      // // alert('222')
      // if(index==0){
        this.setState({
          background: ['url(https://i.loli.net/2020/06/08/cGxTYAp1ZB69nPo.png) center center /  21px 21px no-repeat',
          'url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
          'url(./images/xinzeng.svg) center center /  40px 40px no-repeat',
          'url(./images/jiankang.svg) center center /  40px 40px no-repeat',
          'url(./images/my.svg) center center /  40px 40px no-repeat'
          ]
        },function () { 
          console.log(this.state.background[0])
         })
      }
      // else if(index==1){
      //   this.setState({
      //     background: ['url./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(https://i.loli.net/2020/06/08/cGxTYAp1ZB69nPo.png) center center /  21px 21px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  40px 40px no-repeat',
      //     'url(./images/jiankang.svg) center center /  40px 40px no-repeat',
      //     'url(./images/my.svg) center center /  40px 40px no-repeat'
      //     ]
      //   },function () { 
      //     console.log(this.state.background[1])
      //    })
      // }else if(index==2){
      //   this.setState({
      //     background: ['url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(https://i.loli.net/2020/06/08/mTsnwepoLW9tNQc.png) center center /  40px 40px no-repeat',
      //     'url(./images/jiankang.svg) center center /  40px 40px no-repeat',
      //     'url(./images/my.svg) center center /  40px 40px no-repeat'
      //     ]
      //   },function () { 
      //     console.log(this.state.background[2])
      //    })
        
      // }else if(index==3){
      //   this.setState({
      //     background: ['url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  40px 40px no-repeat',
      //     'url(https://i.loli.net/2020/06/08/XVMvxkZCPuoKG7S.png) center center /  40px 40px no-repeat',
      //     'url(./images/my.svg) center center /  40px 40px no-repeat'
      //     ]
      //   },function () { 
      //     console.log(this.state.background[3])
      //    })
        
      // }else{
      //   this.setState({
      //     background: ['url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  21px 21px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  40px 40px no-repeat',
      //     'url(./images/xinzeng.svg) center center /  40px 40px no-repeat',
      //     'url(https://i.loli.net/2020/06/08/AlJ95vWyrfFNHgp.png) center center /  40px 40px no-repeat'
      //     ]
      //   },function () { 
      //     console.log(this.state.background[4])
      //    })
      // }
      
    // }
    render() {
        console.log(window.location.pathname)
        return (
            <div 
            style={{ 
              position: "fixed", zIndex: '999', 
              background: 'green', paddingTop: '10px',top:'92%',
              bottom: "0", width: "100%", height: "70px", color: "#2278c9" 
              }}
          >
            <div className="bottom" onClick={()=>this.jump()}>
              <Link to="/home">             
                  <div 
                    style={{
                      width: '22px',
                      height: '22px',
                      marginLeft:'30%',
                      background: this.state.background[0],
                    }}  
                  >
                  </div>
                  <p className='bottom_a1'>首页</p>
                
              </Link>
            </div>
            <div className="bottom" onClick={()=>this.jump(1)}>
              <Link to="/wiki">
                <div style={{
                      width: '22px',
                      height: '22px',
                      marginLeft:'35%',
                      background: this.state.background[1] }}
                ></div>
                <p className='bottom_a1'>百科</p>
              </Link>
            </div>
            <div className="bottom" onClick={()=>this.jump(2)}>
              <Link to="/jia">
                <div style={{
                    width: '50px',
                    height: '50px',
                    marginTop:'-5%',
                    background: this.state.background[2] }}
                ></div>
                {/* <p>+</p> */}
              </Link>
            </div>
            <div className="bottom" onClick={()=>this.jump(3)}>
              <Link to="/health">
                  <div style={{
                    width: '22px',
                    height: '22px',
                    marginLeft:'37%',
                    background: this.state.background[3] }}
                  ></div>
                  <p className='bottom_a1'>宝妈健康</p>
              </Link>
            </div>
            <div className="bottom" onClick={()=>this.jump(4)}>
              <Link to="/my">
                  <div style={{
                    width: '22px',
                    height: '22px',
                    marginLeft:'43%',
                    background: this.state.background[4] }}
                  ></div>
                  <p className='bottom_a1'>我的</p>
              </Link>
            </div>
          </div>
          
  
        )
    }
}
