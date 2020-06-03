import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      url: 'https://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC&rating=g',
    }
  }

  handleSubmit = (query) => {
    console.log(query)
    this.setState(prevState => ({
      ...prevState,
      url: `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    }))
    this.forceUpdate()
  }

  fetchQuery = async () => {
    const res = await fetch(`${this.state.url}`)
    const data = await res.json()
    const firstThree = data.data.slice(0, 3)
    const urls = firstThree.map(gif => gif.images.original.url)

    this.setState(prevState => ({
      ...prevState,
      gifs: urls,
    }))
  }

  componentDidMount() {
    this.fetchQuery()
  }

  componentDidUpdate() {
    this.fetchQuery()
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default GifListContainer
