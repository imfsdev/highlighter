export function changeView(state, v) {
  state.view = v
}

export function selectUrl(state, id) {
  state.selectedId = id
}

export function addUrl(state, {url, delay}) {
  if (state.urls.indexOf(url) < 0) {
    state.urls.push({ url, delay, selectors: [] })
  }
}

export function updateUrl(state, {url, delay}) {
  state.urls[state.selectedId].url = url
  state.urls[state.selectedId].delay = delay
}

export function deleteUrl(state, i) {
  state.urls.splice(i, 1)
}

export function selector(state, i) {
  state.selectorId = i
}

export function addSelector(state, obj) {
  obj.selector = obj.selector.toLowerCase()
  state.urls[state.selectedId].selectors.push(obj)
}

export function updateSelector(state, obj) {
  state.urls[state.selectedId].selectors[state.selectorId] = obj
}

export function deleteSelector(state, i) {
  state.urls[state.selectedId].selectors.splice(i, 1)
}

export function addValue(state, v) {
  const currentSelector = state.urls[state.selectedId].selectors[state.selectorId]
  const v1 = v.toLowerCase()
  if (currentSelector.hList.indexOf(v1) < 0) {
    currentSelector.hList.push(v1)
  }
}

export function deleteValue(state, i) {
  const currentSelector = state.urls[state.selectedId].selectors[state.selectorId]
  currentSelector.hList.splice(i, 1)
}
