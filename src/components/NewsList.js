import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectNews, fetchNews } from '../action'

class NewsList extends React.Component {
  componentDidMount () {
    this.fetchNews()
  }

  fetchNews () {
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
    .then( response => { return response.json() })
    .then( data => { this.props.fetchNews(data.hits) })
  }

  renderList () {
    return this.props.News.map( news => {
      return (
        <li
          key={news.title}
          onClick={() => this.props.selectNews(news)}>
          {news.title}</li>
      )
    })
  }
  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    News: state.News
  }
}

// Anything return to this function will end up as props
// on the NewsList Container or Component
function mapDispatchToProps(dispatch) {
  //whenever select book called, result should be passd
  //too all our reducer
  return bindActionCreators({ selectNews: selectNews, fetchNews: fetchNews }, dispatch)
}

// Promote book list from a component to a container - it need to know
// about this new dispatch method, selectBook. make it available
// as a props
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
