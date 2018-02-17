import React, {Component} from 'react';
import Header2 from '../header2/header2.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './bin.css';

export default class Bin extends Component {
  constructor() {
    super()

    this.state = {
      shelf: [],
      body: []
    }

    this.updateInventory = this.updateInventory.bind(this);
  }
  
  updateInventory() {
    let {shelf} = this.state;
    
    let body = shelf.map(row => {
      if (row.name === null) {
        return <Link to={`/create/${row.id}`} key={row.id}><div id="bin1" className="bin-text addInventory ">+ Add inventory to bin</div></Link>
      } else {
        return <Link to={`/bin/${row.id}`} key={row.id}><div id="bin1" className="bin-text addInventory pink">{`Bin ${row.id}`}</div></Link>
      }
    })

    body = body.sort();

    this.setState({
      body: body
    })
  }

  componentWillMount() {
    axios.get(`/api/${this.props.letter}`).then(res => {
      this.setState({shelf: res.data})
      console.log(this.state.shelf);
      this.updateInventory()
    });
  }


 

  render() {

    return(
      <div>
        <Header2 letter={this.props.letter}/>
        <div className="bins-container">
          {this.state.body}
        </div>
      </div>
    )
  }
}