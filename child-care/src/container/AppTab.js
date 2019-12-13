import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import Wiki from './Wiki';
import My from './My';
import Health from './Health'
import Jia from './Jia'

let str;
if(window.location.pathname=="/wiki"){
      str='redTab'
}else if(window.location.pathname=="/home"){
  str="home"
}else if(window.location.pathname=="/my"){
  str="yellowTab"
}else if(window.location.pathname=="/add"){
  str="pinkTab"
}else if(window.location.pathname=="/health"){
  str="greenTab"
}
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: str,
    };
  }

  render() {
    return (
      <div>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="black"
            tintColor="#d81e06"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="Life"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(./images/home.svg) center center /  21px 21px no-repeat' }}
                  
                />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://s2.ax1x.com/2019/12/13/Qcfw38.png) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.setState({
                  selectedTab: 'home',
                });
                window.location.href='/home'
                
              }}
            >
              <AppHome/>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(./images/baike.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://s2.ax1x.com/2019/12/13/Qcfd9f.png) center center /  21px 21px no-repeat' }}
                />
              }
              title="百科"
              key="Koubei"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
                window.location.href='/wiki'
              }}
            >
              <Wiki/>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'url(./images/xinzeng.svg) center center /  40px 40px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'url(https://s2.ax1x.com/2019/12/13/Qcf0gS.png) center center /  40px 40px no-repeat' }}
                />
              }
              key="Friend"
              // dot
              selected={this.state.selectedTab === 'pinkTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'pinkTab',
                });
                window.location.href='/add'
              }}
            >
              <Jia/>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(./images/jiankang.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://s2.ax1x.com/2019/12/13/QcfU4P.png) center center /  21px 21px no-repeat' }}
                />
              }
              title="宝妈健康"
              key="Friend"
              // dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
                window.location.href='/health'
              }}
            >
              <Health/>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(./images/my.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://s2.ax1x.com/2019/12/13/QcfNNt.png) center center /  21px 21px no-repeat' }}
                />
              }
              title="我的"
              key="Friend"
              // dot
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
                window.location.href='/my'
              }}
            >
              <My/>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}