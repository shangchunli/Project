import React, { Component } from 'react'
import { ImagePicker, WingBlank, SegmentedControl} from 'antd-mobile';
import  './sui.css';
const data = [];
export default class Sui extends Component {
    state = {
        files: data,
        multiple: false,
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
    }
   
    render() {
        const { files } = this.state;
        return (
            <div>
                
                <p style={{paddingTop:'15%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;记录美好瞬间...</p>
                <WingBlank>
                        <ImagePicker
                        style={{paddingTop:'30%'}}
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 100}
                        multiple={this.state.multiple}
                        />
                 </WingBlank>
                 <p style={{paddingTop:'5%'}}>......................................................................................................................</p>
                 <button className='sui1' style={{marginLeft:'23%'}}>发表</button>
            </div>
        )
    }
}
