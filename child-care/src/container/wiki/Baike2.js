import React, { Component } from 'react'
import { List, InputItem,Button,NavBar,Icon } from 'antd-mobile';

import sui from '../sui.css';
export default class Baike1 extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                 icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',
                    color:'#000',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    详情页
                </NavBar>
                {/* <h3 >&nbsp;&nbsp;&nbsp;&nbsp;宝宝什么时候添加辅食？</h3> */}
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='detail2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孩子的生长发育离不开补钙，不少家长一直坚守在给孩子补钙的道路上，希望孩子从小打好基础，
                身高和体能上都不输给其他孩子。但是，很多家长在这件事情上存在不少误区，或者说根本就不知道孩子到底是不是缺钙。
                </div>
                <button className='detail1'> Part1:补钙的最佳膳食来源就是奶制品</button>
                <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    每天可以给孩子喝300~500毫升的纯牛奶。如果孩子不喜欢喝纯牛奶，也可以喝酸奶。
                    或者给孩子吃一点奶酪也可以，它的钙含量也是比较丰富的。
                    不过奶酪的脂肪含量也非常高，每天最多给孩子吃1~2片，可以加到面包里面去吃。并且最好选择低脂的奶酪，
                    会更好一些。除了奶制品，豆制品的钙含量也很丰富。
                </div>
               <br/>
               <br/>
              
                    <img 
                        style={{width:'92%',height:'100',paddingLeft:'5%',paddingTop:'3%'}}
                        src='https://s2.ax1x.com/2019/12/17/QI8tUS.png
                        '
                    />
                 <button className='detail1'> Part2:绿叶菜？</button>
                 <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    除了奶制品和豆制品以外，还有一类食物，钙含量也非常丰富，那就是绿叶菜。例如小油菜、菠菜、小白菜、生菜、油麦菜等。
                    
                    不过有一个细节，家长必须得注意：绿叶菜在烹调的时候，
                    可以提前用沸水炒3~5秒，把绿叶菜里面的草酸给去除掉，这样，草酸就不会影响钙的吸收了。
                    推荐食谱：熟大白菜汁
                    一杯熟的大白菜汁能提供几乎与一杯牛奶一样多的钙。白菜含有丰富的粗纤维，
                    不但能起到润肠的作用，还能刺激肠胃蠕动，促进大便排泄，帮助消化。
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <img 
                        style={{width:'92%',height:'100',paddingLeft:'5%',paddingTop:'3%'}}
                        src='https://s2.ax1x.com/2019/12/17/QI8f29.png
                        '
                    />
            </div>
        )
    }
}
