export function selectNews (news) {
  //SelectNews is and Action Creator, it need to return an action,
  // an obj with type property
  return {
    type: 'NEWS_SELECTED',
    payload: news
  }
}

export function fetchNews (newsData) {
  console.log(newsData);
  return {
    type: 'NEWS_FETCH_API',
    payload: newsData
  }
}
