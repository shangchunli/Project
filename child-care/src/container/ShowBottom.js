import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class ShowBottom extends Component {
    
    render() {
        console.log(window.location.pathname)
        return (
            <div 
            style={{ 
              position: "fixed", zIndex: '999', 
              background: 'white', paddingTop: '15px', 
              bottom: "0", width: "100%", height: "50px", color: "#2278c9" 
              }}
          >
            <div className="bottom">
              <Link to="/home">             
                  <div 
                    style={{
                      width: '22px',
                      height: '22px',
                      marginLeft:'30%',
                      background: 'url(./images/home.svg) center center /  21px 21px no-repeat' }}  
                  >
                  </div>
                  <p className='bottom_a1'>首页</p>
                
              </Link>
            </div>
            <div className="bottom">
              <Link to="/wiki">
                <div style={{
                      width: '22px',
                      height: '22px',
                      marginLeft:'35%',
                      background: 'url(./images/baike.svg) center center /  21px 21px no-repeat' }}
                ></div>
                <p className='bottom_a1'>百科</p>
              </Link>
            </div>
            <div className="bottom">
              <Link to="/jia">
                <div style={{
                    width: '50px',
                    height: '50px',
                    marginTop:'-5%',
                    background: 'url(./images/xinzeng.svg) center center /  40px 40px no-repeat' }}
                ></div>
                {/* <p>+</p> */}
              </Link>
            </div>
            <div className="bottom">
              <Link to="/health">
                  <div style={{
                    width: '22px',
                    height: '22px',
                    marginLeft:'37%',
                    background: 'url(./images/jiankang.svg) center center /  40px 40px no-repeat' }}
                  ></div>
                  <p className='bottom_a1'>宝妈健康</p>
              </Link>
            </div>
            <div className="bottom">
              <Link to="/my">
                  <div style={{
                    width: '22px',
                    height: '22px',
                    marginLeft:'43%',
                    background: 'url(./images/my.svg) center center /  40px 40px no-repeat' }}
                  ></div>
                  <p className='bottom_a1'>我的</p>
              </Link>
            </div>
          </div>
          
  
        )
    }
}
