import Sui from './Sui';
import Tie from './Tie';
import React, { Component } from 'react'
import sui from './sui.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

export default class Jia extends Component {
    render() {
        return (
            
            <Router>

                <div>
                    <img src='images/12.png'
                        style={{width:'8%',height:'50%'}}
                    />
                    <Link to="/tie"><span className='jia1'>帖子</span></Link>
                    <Link to="/sui"><span className='jia1'>随想</span></Link>
                    
                   
                        <Route path='/sui' component={Sui}/>
                      
                        <Route path='/tie' component={Tie}/>
                       
                   
    
                </div>
                
            </Router>
      
        )
    }
}
