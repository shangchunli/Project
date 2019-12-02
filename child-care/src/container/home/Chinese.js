import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,Button} from 'antd-mobile';

const tabs = [
    { title: '字母' },
    { title: '拼音' },
    { title: '汉字' },
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
    render() {
        return (
            <div >
                <NavBar
                    style={{backgroundColor:'#fff',
                    color:'#000',position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    识图
                </NavBar>
                {/* <WhiteSpace /> */}
               <div style={{marginTop:39,position:"fixed",width:"100%"}} >
                    <WhiteSpace />
                    
                    <Tabs tabs={tabs} initialPage={2} 
                    animated={false} useOnPan={false}
                     swipeable={false}
                    >
                    <div style={{  alignItems: 'center', justifyContent: 'center', height: '700px' }}>
                    <WingBlank>
                    <Carousel
                            autoplay={false}
                            infinite
                            style={{height:"500px"}}
                            >
                            {["taoiz","boluo","ningmeng"].map(val => (
                                <div
                                style={{ display: 'inline-block', width: '100%',height:"500px" }}
                                >
                                <img
                                    src={`images/fruit/${val}.jpg`}
                                    alt=""
                                    style={{ width: '100%', height:"500px" }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    
                                    // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                              <WhiteSpace />
                                <Button type="primary" inline 
                                    style={{marginTop:'70px', marginLeft:'2%' }}>
                                    inline primary
                                </Button>
                                <Button type="ghost" inline 
                                style={{marginTop:'70px', marginRight:'2%', float:'right'}} 
                                className="am-button-borderfix">inline ghost</Button>
                                <WhiteSpace />
                                </div>

                            ))}
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
                            {["huluobo","xihongshi","huanggua"].map(val => (
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
                                <Button type="primary" inline 
                                    style={{marginTop:'70px', marginLeft:'2%' }}>
                                    inline primary
                                </Button>
                                <Button type="ghost" inline 
                                style={{marginTop:'70px', marginRight:'2%', float:'right'}} 
                                className="am-button-borderfix">inline ghost</Button>
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
                                <Button type="primary" inline 
                                    style={{marginTop:'70px', marginLeft:'2%' }}>
                                    inline primary
                                </Button>
                                <Button type="ghost" inline 
                                style={{marginTop:'70px', marginRight:'2%', float:'right'}} 
                                className="am-button-borderfix">inline ghost</Button>
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
                                <Button type="primary" inline 
                                    style={{marginTop:'70px', marginLeft:'2%' }}>
                                    inline primary
                                </Button>
                                <Button type="ghost" inline 
                                style={{marginTop:'70px', marginRight:'2%', float:'right'}} 
                                className="am-button-borderfix">inline ghost</Button>
                                </div>
                            ))}
                        </Carousel>
                            
                        </WingBlank>
                    </div>
                    <div>
                        <img src="./images/fruit/apple.jpg"/>
                        <img src="./images/fruit/apple.jpg"/>
                        <img src="./images/fruit/apple.jpg"/>

                        <img src="./images/fruit/apple.jpg"/>
                        <img src="./images/fruit/apple.jpg"/>
                    </div>
                    
                    
                    </Tabs>
                    <WhiteSpace />
                </div> 
            </div>
        )
    }
}
