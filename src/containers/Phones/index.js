import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchPhones} from "../../actions";



class  App extends  Component{
  
  componentDidMount() {
    this.props.fetchPhones()
  }

  render() {
    return (
      <div>
        <h1>Phones</h1>
      </div>
    )
  }
}

const mapStateToProps = ({phones})=>{
  
  return {
   phones: phones.phoneList
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchPhones: () => dispatch(fetchPhones())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App) 
