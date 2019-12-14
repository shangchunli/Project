import React, { Component } from 'react'
import { ImagePicker, WingBlank, SegmentedControl} from 'antd-mobile';
import  './sui.css';
const data = [];
export default class Sui extends Component {
    state = {
        files: data,
        multiple: false,

    }
    componentWillMount(){
      fetch('http://192.168.43.217:5001/add')
      .then(res=>res.text())
      .then((res)=>{
          console.log(res);
      })
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
            <div style={{marginTop:20,backgroundColor:'#fff',width:"100%",height:500
            }}>
                 <div contentEditable="true" style={{
                width:'95%',margin:'0 auto',padding:'50px',
                textAlign:'center'}}>
                记录美好瞬间
                 </div>
                 <WingBlank>
                        <ImagePicker
                        style={{width:"100%",marginLeft:'33%',marginTop:'100px'}}
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 100}
                        multiple={this.state.multiple}
                        />
                 </WingBlank>
                 <button style={{marginTop:30,marginLeft:'20%',height:'30px',borderRadius:'30px',
                 width:"50%",backgroundColor:'red'}}>发表</button>
                
            </div>
        )
    }
}

// import React, { Component } from 'react'
// import  './sui.css';
// export default class Sui extends Component {
//     constructor(){
//         super();
//         this.state={
//             data:''
//         }
//     }
//     componentDidMount(){
//         fetch('http://192.168.43.217:5001/ppp')
//               .then(res=>res.json())
//               .then((res)=>{
//                   console.log(res);
//                   console.log(res[0].content)
//                   this.setState({
//                       data:res[0].content
//                   })
//               })
//     }
//     render() {
    
//         return (
//             <div className="sui">
//                 <div 
//                 dangerouslySetInnerHTML={{ __html: this.state.data }}></div>
//             </div>
//         )
//     }
// }

