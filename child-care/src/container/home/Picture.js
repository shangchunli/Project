import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,Button} from 'antd-mobile';
import Fruit from './Fruit.js';
import Vegetables from './Vegetables.js';
import Animal from './Animal.js';
import Plant from './Plant.js';


const tabs = [
    { title: '水果' },
    { title: '蔬菜' },
    { title: '动物' },
    { title: '植物' }
  ];

  
  
export default class Picture extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
   
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div >
                <NavBar
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',color:'#000',
                    height:60,fontWeight:"bolder",
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    识图
                </NavBar>
                {/* <WhiteSpace /> */}
               <div style={{marginTop:60,top:50}} >
                    <WhiteSpace />
                 
                    <Tabs tabs={tabs} initialPage={2} 
                    animated={false} useOnPan={false}
                     swipeable={false} 
                    >
                    {/* 水果 */}
                    <div style={{alignItems: 'center', justifyContent: 'center', height: '700px' }}>
                        <WingBlank>                        
                            <Fruit/>
                        </WingBlank>
                        <WhiteSpace/>
                    </div>
                    {/* 蔬菜 */}
                    <div style={{  alignItems: 'center', justifyContent: 'center', height: '700px'  }}>
                        <WingBlank>
                            <Vegetables/>

                        </WingBlank>
                    </div>
                    {/* 动物 */}
                    <div style={{ alignItems: 'center', justifyContent: 'center', height: '700px' }}>
                        <WingBlank>
                        <Animal/>
                        </WingBlank>
                    </div>
                    {/* 植物 */}
                    <div style={{  alignItems: 'center', justifyContent: 'center', height: '700px',  }}>
                        <WingBlank>
                        <Plant/>
                        </WingBlank>
                    </div>
                    
                    
                    </Tabs>
                    <WhiteSpace />
                </div> 
            </div>
        )
    }
}
