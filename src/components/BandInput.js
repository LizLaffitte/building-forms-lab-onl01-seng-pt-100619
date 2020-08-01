// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  state = {
    name: ''
  }
handleOnChange = (event) => {
  this.setState({
    name: event.target.value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  this.props.addBand(this.state)
  this.setState({name: ''})
}
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name:</label><br />
          <input type="text" onChange={this.handleOnChange} value={this.state.name}/>
          <br /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
