import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectNews } from '../action'

class NewsList extends React.Component {
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
  return bindActionCreators({ selectNews: selectNews }, dispatch)
}

// Promote book list from a component to a container - it need to know
// about this new dispatch method, selectBook. make it available
// as a props
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
