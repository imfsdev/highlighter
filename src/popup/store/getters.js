export function currentUrl(state) {
  return state.urls[state.selectedId]
}

export function currentSelector(state) {
  return state.urls[state.selectedId].selectors[state.selectorId] || {}
}