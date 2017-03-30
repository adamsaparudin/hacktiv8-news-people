export function selectNews (news) {
  //SelectNews is and Action Creator, it need to return an action,
  // an obj with type property
  return {
    type: 'NEWS_SELECTED',
    payload: news
  }
}
