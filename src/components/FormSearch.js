import React, { Component } from 'react'

export default class FormSearch extends Component {
  constructor (props) {
    super (props)

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSearchSubmit (event) {
    event.preventDefault()

    //Fetch the fucking data in here you stupid ass
  }

  render () {
    return (
      <form onSubmit={this.onFormSearchSubmit}>
        <input
          placeholder="Search News..."
          value={this.state.term}
          onChange={this.onInputChange}
          type="text"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
