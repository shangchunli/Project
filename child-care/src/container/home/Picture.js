import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,Button} from 'antd-mobile';


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
                        
                    <div style={{  
                        alignItems: 'center', justifyContent: 'center', height: '700px' }}>
                    <WingBlank>                        

                         

                    <Carousel
                            autoplay={false}
                            infinite
                            style={{height:"500px"}}
                            >
                                <img/ >
                    {/* <img = */}
                            {/* {["mihoutao","boluo","ningmeng"].map(val => (
                                <div
                                style={{ display: 'inline-block', width: '100%',height:"500px" }}
                                >
                                <img
                                    // src={`images/fruit/${val}.jpg`}
                                   src={}
                                    // src={`https://s2.ax1x.com/2019/12/04/Q1rFf0.jpg`}

                                    alt=""
                                    style={{ width: '100%', height:"500px" }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    
                                    // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </div>

                            ))} */}]
                        </Carousel>
                            
                        </WingBlank>
                        <WhiteSpace/>
                    </div>
                    <div style={{  alignItems: 'center', justifyContent: 'center', height: '700px'  }}>
                    <WingBlank>
                    <Carousel
                            autoplay={false}
                            infinite
                            style={{height:"500px"}}
                            >
                            {["huluobo","xihongshi","baicai"].map(val => (
                                <div
                                style={{ display: 'inline-block', width: '100%',height:"500px" }}
                                >
                                <img
                                    src={`images/cai/${val}.jpg`}
                                    alt=""
                                    style={{ width: '100%', height:"500px" }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                                </div>
                            ))}
                        </Carousel>
                            
                        </WingBlank>
                    </div>
                    <div style={{ alignItems: 'center', justifyContent: 'center', height: '700px' }}>
                    <WingBlank>
                    <Carousel
                            autoplay={false}
                            infinite
                            style={{height:"500px"}}
                            >
                            {["houzi","gou","laohu"].map(val => (
                                <div
                                style={{ display: 'inline-block', width: '100%',height:"500px" }}
                                >
                                <img
                                    src={`images/animal/${val}.jpg`}
                                    alt=""
                                    style={{ width: '100%', height:"500px" }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    
                                    // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                              
                                </div>
                            ))}
                        </Carousel>
                            
                        </WingBlank>
                    </div>
                    <div style={{  alignItems: 'center', justifyContent: 'center', height: '700px',  }}>
                    <WingBlank>
                    <Carousel
                            autoplay={false}
                            infinite
                            style={{height:"500px"}}
                            >
                            {["hua","cao","shu"].map(val => (
                                <div
                                style={{ display: 'inline-block', width: '100%',height:"500px" }}
                                >
                                <img
                                    src={`images/zhiwu/${val}.jpg`}
                                   
                                    alt=""
                                    style={{ width: '100%', height:"500px" }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    
                                    // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                               
                                </div>
                            ))}
                        </Carousel>
                            
                        </WingBlank>
                    </div>
                    
                    
                    </Tabs>
                    <WhiteSpace />
                </div> 
            </div>
        )
    }
}
