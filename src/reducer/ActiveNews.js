export default function (state = '', action) {
  switch (action.type) {
    case 'NEWS_SELECTED':
      return action.payload
    default:
      return state
  }
}
