import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchNewsAPI } from '../action'

class NewsList extends React.Component {
  componentDidMount () {
    this.props.fetchNewsAPI()
  }

  renderList () {
    return this.props.News.filter( news => {
      let regPattern = new RegExp(this.props.Query, 'gi')
      return regPattern.test(news.title)
    }).map( news => {
      return (
        <li key={news.title}>{news.title}</li>
      )
    })
  }
  render () {
    return (
      <ul>
        { this.props.News === '' ? "Loading.." : this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    News: state.News,
    Query: state.Query
  }
}

// Anything return to this function will end up as props
// on the NewsList Container or Component
function mapDispatchToProps(dispatch) {
  //whenever select book called, result should be passd
  //too all our reducer
  return bindActionCreators({ fetchNewsAPI: fetchNewsAPI }, dispatch)
}

// Promote book list from a component to a container - it need to know
// about this new dispatch method, selectBook. make it available
// as a props
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
