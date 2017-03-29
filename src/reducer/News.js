const getNews = (state=[], action) => {
  switch(action.type) {
    case 'GET_NEWS':
      fetch('https://hn.algolia.com/api/v1/search?query=' + action.payload.query)
      .then( (response) => { return response.json() })
      .then( (data) => { return data.hits })
      break;
    default:
      fetch('https://hn.algolia.com/api/v1/search?query=redux')
      .then( (response) => { return response.json() })
      .then( (data) => { return data.hits })
  }
}

export default getNews
