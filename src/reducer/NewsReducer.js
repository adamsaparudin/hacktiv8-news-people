export default function (state = '', action) {
  switch (action.type) {
    case 'NEWS_FETCH_API':
      return action.payload
    default:
      return state
  }
}
