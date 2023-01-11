import React, { Component } from 'react'
import Loading from './Loading.gif'

export class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} style={{width:'130px'}}/>
      </div>
    )
  }
}

export default Loader