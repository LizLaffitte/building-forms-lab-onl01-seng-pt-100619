import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  
  render() {
    const renderBandsList = (
      this.props.bands.map((band, index) => {
        return(<li key={index}>{band.name}</li>)
      }))
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {renderBandsList}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addBand: (formData) => {
      dispatch({type: 'ADD_BAND', band: formData})
    }
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
