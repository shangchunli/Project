import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';

export default class BabyFood extends Component {
    render() {
        return (
            <div>
                <div style={{
                    backgroundCorlor:'#fff',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}>
                    <span style={{marginRight:'30%'}}>
                        <img src="./images/return.png" alt="返回" style={{width:'6%',height:'6%',marginTop:'2%',marginLeft:'2%'}}/>
                    </span>
                    <span style={{fontSize:'20px'}}>宝宝饮食</span>
                </div>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/addfoodsort.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？<br/>
                                从种类讲：应按“淀粉（谷物）—蔬菜—水果—动物”的顺序来添加，首先应添加谷...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/addfoodtime.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食时间?<br/>
                                一般在六个月时可以添加辅食，一周岁之前最好都可以母乳喂养，或者当宝宝...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/addfoodsort.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？<br/>
                                从种类讲：应按“淀粉（谷物）—蔬菜—水果—动物”的顺序来添加，首先应添加谷...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/addfoodtime.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食时间?<br/>
                                一般在六个月时可以添加辅食，一周岁之前最好都可以母乳喂养，或者当宝宝...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/addfoodmuch.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？<br/>
                                从种类讲：应按“淀粉（谷物）—蔬菜—水果—动物”的顺序来添加，首先应添加谷...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/eatfood.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食时间？<br/>
                                一般在六个月时可以添加辅食，一周岁之前最好都可以母乳喂养，或者当宝宝有如下...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/whole1.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食原则？<br/>
                                从种类讲：应按“淀粉（谷物）—蔬菜—水果—动物”的顺序来添加，首先应添加谷...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/babyfood/eggmilk.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食时间？<br/>
                                一般在六个月时可以添加辅食，一周岁之前最好都可以母乳喂养，或者当...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
