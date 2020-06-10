import React from 'react';
import { TabBar } from 'antd-mobile';
import {Route,Link} from "react-router-dom"
import AppHome from './AppHome';
import Wiki from './Wiki';
import My from './My';
import Health from './Health'
import Add from './Add'

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    console.log('bottom')
    return (
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
              console.log(this.props);

            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://i.loli.net/2020/06/08/cGxTYAp1ZB69nPo.png ) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://i.loli.net/2020/06/08/cGxTYAp1ZB69nPo.png ) center center /  21px 21px no-repeat' }}
              />
            }
            title="百科"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push("wiki")
            }}
          >
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
            }}
          >
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
            }}
          >
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
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}