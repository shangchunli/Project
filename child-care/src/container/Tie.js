import React, { Component } from 'react'
<<<<<<< HEAD
import { ImagePicker, WingBlank, SegmentedControl} from 'antd-mobile';
import sui from './sui.css';
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
                
                <p style={{paddingTop:'15%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发表你的看法吧...</p>
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
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标签：
                 <button className='tie1' >潮娃穿搭</button>
                 <button className='tie1' >常见疾病</button>
                 <button className='tie1' >亲子教育</button>
                 ....
                 <p style={{paddingTop:'5%'}}>......................................................................................................................</p>
                 <button className='sui1' style={{marginLeft:'23%'}}>发表</button>
=======
import './sui.css';
import Editor from './Add/Editor'
import registerServiceWorker from './Add/registerServiceWorker'

export default class Tie extends Component {
    render() {
        return (
            <div >
                <Editor/>
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
            </div>
        )
    }
}
<<<<<<< HEAD
=======
registerServiceWorker();
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6

