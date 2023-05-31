import React, { Component } from 'react'
import './classform.css'

class ClassForm extends Component {
    state = {name:'', email: ''}

    nameClick = (event) =>{
        this.setState({name : event.target.value})
    }

    emailClick = (event) => {
        this.setState({email : event.target.value})
    }

    submitClick = (event) =>{
      event.preventDefault()
      console.log( this.state.name, this.state.email)
    }

  render() {
    return (
        <div>
      <form class='form' onSubmit={this.submitClick}>
        
        <input 
        type = 'text'
        placeholder='name'
        value={this.state.name}
        onChange = {this.nameClick}
        />
       
       <input 
       type = 'text'
       placeholder='email'
       value = {this.state.email}
       onChange={this.emailClick}
       />
       <button type="submit">Submit</button>
      </form>
      
      </div>
    )
  }
}

export default ClassForm