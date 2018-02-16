import React, {Component} from 'react';
import Header3 from '../header3/header3.js';

export default class CreateBin extends Component {



  render() {
    
    return(
      <div>
        <Header3 letter={this.props.letter} binNum={this.props.binNum}/>
      </div>
    ) 

  }
}