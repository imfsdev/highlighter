export function addCurrentTab({ commit }) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    commit('addUrl', tabs[0].url)
  })
}

function injectStyles() {
  chrome.runtime.sendMessage({ action: 'injectStyles' })
}

export function addUrl({ commit }, url) {
  commit('addUrl', url)
  injectStyles()
}

export function updateUrl({commit}, payload) {
  commit('updateUrl', payload)
  injectStyles()
}

export function deleteUrl({commit}, payload) {
  commit('deleteUrl', payload)
  injectStyles()
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
