export function selectNews (news) {
  //SelectNews is and Action Creator, it need to return an action,
  // an obj with type property
  return {
    type: 'NEWS_SELECTED',
    payload: news
  }
}

export function setQuery (query) {
  return {
    type: 'SET_QUERY',
    payload: query
  }
}

export function fetchNews (newsData) {
  return {
    type: 'NEWS_FETCH_API',
    payload: newsData
  }
}

export function fetchNewsAPI () {
  return (dispatch) => {
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
    .then( response => ( response.json() ))
    .then( data => { dispatch(fetchNews(data.hits)) })
  }
}

export function fetchPeople (peopleData) {
  return {
    type: 'PEOPLE_FETCH_API',
    payload: peopleData
  }
}

export function fetchPeopleAPI () {
  return (dispatch) => {
    fetch('http://swapi.co/api/people/')
    .then( reponse => ( reponse.json() ))
    .then( data => { dispatch(fetchPeople(data.results)) })
  }
}
