import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
    }
  }

  newSearch = (query) => {
    this.fetchQuery(query)
  }

  fetchQuery = async (query = "dogs") => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    const data = await res.json()
    const urls = data.data.map(img => img.images.original.url)

    this.setState(prevState => ({
      ...prevState,
      gifs: urls
    }))
  }

  componentDidMount() {
    this.fetchQuery()
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch newSearch={this.newSearch}/>
      </div>
    )
  }
}

export default GifListContainer
