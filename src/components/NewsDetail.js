import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewsDetail extends Component {
  render () {
    if(!this.props.ActiveNews) {
      return (
        <div>Select news to get started</div>
      )
    }
    return (
      <div>
        {this.props.ActiveNews.title}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ActiveNews: state.ActiveNews
  }
}

export default connect(mapStateToProps, null)(NewsDetail)
