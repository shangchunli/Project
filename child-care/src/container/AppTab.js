import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import Wiki from './Wiki';
import My from './My';
import Health from './Health'
import Add from './Add'
import Jia from './Jia'
import {Route,Link} from "react-router-dom"


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div>
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="black"
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
              background: 'url(./images/home1.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
              // console.log(window.location.pathname);
              // this.props.history.push('/home');
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
                background: 'url(./images/baike1.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="百科"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              // console.log(window.location.pathname);
              // this.props.history.push('/wiki');
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
                background: 'url(./images/xinzeng1.svg) center center /  40px 40px no-repeat' }}
              />
            }
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'pinkTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'pinkTab',
              });
              // this.props.history.push('/add');
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
                background: 'url(./images/jiankang1.svg) center center /  21px 21px no-repeat' }}
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
              // this.props.history.push('/health');
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
                background: 'url(./images/my1.svg) center center /  21px 21px no-repeat' }}
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
              // this.props.history.push('/my');
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
      <div>
        {/* <Route path="/home/apphome" component={AppHome}/> */}
        {/* <Route path="/home/wiki" component={Wiki}/>
        <Route path="/home/health" component={Health}/>
        <Route path="/home/my" component={My}/> */}
      </div>
      </div>
    );
  }
}