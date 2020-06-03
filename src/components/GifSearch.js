import React, { Component } from 'react'

export class GifSearch extends Component {

  state = {
    searchText: ""
  }

  onChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.searchText)
    this.setState({
      searchText: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Search Term:</label>
          <input type="text" onChange={this.onChange} value={this.state.searchText}/>
          <button>Find Gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
