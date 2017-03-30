import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPeopleAPI } from './action'

import Menu from './components/Menu'

class People extends React.Component {

  componentDidMount () {
    this.props.fetchPeopleAPI()
  }

  render () {
    return (
      <div>
        <Menu />
        <h1>Peoples</h1>
        <ul>
        { this.props.People.map( (character) => {
          return <li key={character.name}>{ character.name }</li>
        }) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    People: state.People
  }
}

// Don't forget to add dispatch..
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPeopleAPI: fetchPeopleAPI }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(People)
