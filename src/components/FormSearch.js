import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setQuery } from '../action'

class FormSearch extends Component {
  onInputChange (event) {
    this.props.setQuery(event.target.value)
  }

  onFormSearchSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.onFormSearchSubmit}>
        <input
          value={this.props.Query}
          onChange={(e) => this.onInputChange(e)}
          type="text"/>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    Query: state.Query
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setQuery: setQuery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch)
