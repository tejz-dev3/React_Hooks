
import React, { Component } from 'react'

class EventC extends Component {

    clickHandler =() =>{
        console.log('Event by Class Component')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventC