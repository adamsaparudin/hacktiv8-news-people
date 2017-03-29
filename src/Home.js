import React from 'react'
import { connect } from 'react-redux'

import Menu from './components/Menu'
import FormSearch from './components/FormSearch'

const Home = (props) => {
  return (
    <div>
      <Menu />
      <FormSearch />
      <h1>News</h1>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return { News: state }
}

export default connect(mapStateToProps, null)(Home)
