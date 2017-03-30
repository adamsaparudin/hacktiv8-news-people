import React from 'react'
import { connect } from 'react-redux'

import Menu from './components/Menu'
import FormSearch from './components/FormSearch'
import NewsList from './components/NewsList'
import NewsDetail from './components/NewsDetail'

const Home = () => {
  return (
    <div>
      <Menu />
      <FormSearch />
      <h1>News</h1>
      <NewsList />
      <NewsDetail />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { News: state }
}

export default connect(mapStateToProps, null)(Home)
