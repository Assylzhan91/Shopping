import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import {Icon} from '@blueprintjs/core'
import {connect} from "react-redux";

import {searchPhone} from "actions";



class Search extends Component {
  state = {
    value: ''
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.searchPhone(this.state.value)
  }

  handleChange = value=>{
    
    this.setState({value})
  }
  render() {
    return (
      <div className='well blosd'>
        <h3 className=''>Quick shop</h3>
        <InputGroup className="mb-3">
          <Form onSubmit={this.handleSubmit}>
            <FormControl
              placeholder="Search"
              onChange={(e)=>this.handleChange(e.target.value)}
              value={this.state.value}
            />  
          </Form>
          
          <InputGroup.Append>
            <Button type='submit'>
              <Icon
                icon='search'
              />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}


const mapDispatchToProps = {
  searchPhone
}



export default connect(null, mapDispatchToProps)(Search)
