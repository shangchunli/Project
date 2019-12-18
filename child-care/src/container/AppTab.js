import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import Wiki from './Wiki';
import My from './My';
import Health from './Health'
import Jia from './Jia'
import {withRouter} from 'react-router-dom'

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
class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: str,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="black"
            tintColor="#d81e06"
            barTintColor="white"
            prerenderingSiblingsNumber='0'
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
                this.props.history.push('/home')
                
              }}
              // onClick={()=>{this.props.history.push('/home')}}
            >
              {this.props.location.pathname=='/home'?<AppHome/>:null}
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
                this.props.history.push('/wiki')
              }}
              // onClick={()=>{this.props.history.push('/wiki')}}
            >
              {this.props.location.pathname=='/wiki'?<Wiki/>:null}
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
                this.props.history.push('/add')
              }}
              // onClick={()=>{this.props.history.push('/add')}}
            >
              {this.props.location.pathname=='/add'?<Jia/>:null}
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
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
                this.props.history.push('/health')
              }}
              // onClick={()=>{this.props.history.push('/health')}}
            >
              {this.props.location.pathname=='/health'?<Health/>:null}
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
                this.props.history.push('/my')
              }}
              // onClick={()=>{this.props.history.push('/my')}}
            >
              {this.props.location.pathname=='/my'?<My/>:null}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
export default withRouter(AppTab);