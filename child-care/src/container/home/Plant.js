import React, { Component } from 'react'
import { Carousel,WingBlank, WhiteSpace,Flex,Button} from 'antd-mobile';
export default class Fruit extends Component {
    constructor(){
        super();
        this.state = {
            data: ['cao', 'hua', 'shu'],
            // imgHeight: 200,
        }
    }
    render() {
        return (
            <div>
                <WhiteSpace/>
                <Carousel
                    autoplay={false}
                    infinite
                    dots={false}
                >
                {this.state.data.map(val => (
                    <div>
                        <img
                            src={"/images/plant/"+val+".jpg"}
                            alt={val}
                            style={{ width: '100%', verticalAlign: 'top',height:'400px'}}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: '300' });
                            }}
                        />

                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button >{val}</Button>
                    </div>
                ))}
                </Carousel>
                

                
            </div>
        )
    }
}
