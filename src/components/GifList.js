import React, { Component } from 'react'

export class GifList extends Component {

  listGifs = () => this.props.gifs.map((gif, idx) => {
      return <li key={idx}><img src={gif} alt="gif"/></li>
    })

  render() {
    return (
      <ul>
        {this.listGifs()}
      </ul>
    )
  }
}

export default GifList
