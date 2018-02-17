import React, {Component} from 'react';
import Header3 from '../header3/header3.js';
import axios from 'axios';
import './editbin.css';

export default class EditBin extends Component {
  constructor() {
    super();

    this.state = {
      values: {
        name: '',
        price: ''
      }
    }
  }


  componentWillMount() {
    console.log(`/api/row/${this.props.id}`);
    axios.get(`/api/row/${this.props.id}`).then(res => {
     let value = res.data[0];
      this.setState({
        values: value
      })
      console.log(this.state.values);
    });
  }


  render() {
    return(
      <div>
        <Header3 />
        <div className="Detail__child_container">
          <div className="Detail__clearfix"></div>
          <div className="Detail__child_content">
            <div className="Detail__child_content_left">
            <img src="http://lorempixel.com/200/200/business/" alt="inventory" />
            </div>
            <div className="Detail__child_content_right">
              <div className="Detail__data_container">
                  <p className="Detail__child_content_title">Name</p>
                  <input className="Create__data_input" value={this.state.values.name}/> <br />
                  <p className="Detail__child_content_title">Price</p>
                  <input className="Create__data_input" value={`$${this.state.values.price}`}/> <br />
              </div>
              <div className="Detail__child_buttons_container">
                <button className="Detail__btn">Edit</button>
                <button className="Detail__btn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }

}