function injectStyles() {
  chrome.runtime.sendMessage({ action: 'injectStyles' })
}

function setBadgeText(state) {
  if (state.urls.length > 0) {
    chrome.browserAction.setBadgeText({ text: `${state.urls.length}` });
  } else {
    chrome.browserAction.setBadgeText({ text: '' });
  }
}

export function addCurrentTab({ commit, state }) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    commit('addUrl', {url: tabs[0].url})
    setBadgeText(state)
  })
}

export function addUrl({ commit, state }, payload) {
  commit('addUrl', payload)
  injectStyles()
  setBadgeText(state)
}

export function updateUrl({commit}, payload) {
  commit('updateUrl', payload)
  injectStyles()
}

export function deleteUrl({commit, state}, payload) {
  commit('deleteUrl', payload)
  injectStyles()
  setBadgeText(state)
}

export function addSelector({commit}, payload) {
  commit('addSelector', payload)
  injectStyles()
}

export function updateSelector({commit}, payload) {
  commit('updateSelector', payload)
  injectStyles()
}

export function deleteSelector({commit}, payload) {
  commit('deleteSelector', payload)
  injectStyles()
}

export function addValue({commit}, payload) {
  commit('addValue', payload)
  injectStyles()
}

export function deleteValue({commit}, payload) {
  commit('deleteValue', payload)
  injectStyles()
}
