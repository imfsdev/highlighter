console.log('background.js')

function injectStyles() {
  const storedState = localStorage.getItem('vuex')
  if (!storedState) {
    return
  }

  const state = JSON.parse(storedState)

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const url = state.urls.find(el => tabs[0].url.startsWith(el.url))
    console.log('Inject styles', state, tabs[0].url)
    if (url) {
      const styles = url.selectors.map(s => `
        ${s.list.map(s => s + '.ext_selected').join(',')} {
          background: ${s.highlightBgColor};
          color: ${s.highlightColor};
          font-size: ${s.fontSize};
          padding: ${s.padding};
        }
        ${s.list.join(',')} {
          background: ${s.defaultBgColor};
          color: ${s.defaultColor};
          font-size: ${s.fontSize || '1em'};
          padding: ${s.padding};
        }
      `).join('\n');

      const selectors = url.selectors.map(s => ({
        selectors: s.list,
        hList: s.hList
      }))

      const scripts = `
        (function() {
          var styleEl = document.getElementById('y2h_styles');
          if (styleEl) {
            styleEl.remove();
          }
          var style = document.createElement('style');
          style.id = "y2h_styles";
          style.type = 'text/css';
          style.innerHTML = \`${styles}\`;
          document.getElementsByTagName('head')[0].appendChild(style);

          setTimeout(() => {
            var y2hList = ${JSON.stringify(selectors)};
            y2hList.forEach(s => {
              var elements = document.querySelectorAll(s.selectors.join(','));
              elements.forEach(el => {
                if(s.hList.indexOf(el.innerText.toLowerCase().trim()) >= 0) {
                  el.classList.add('ext_selected');
                } else {
                  el.classList.remove('ext_selected');
                }
              });
            });
          }, ${url.delay || 100})
        })();
      `

      chrome.tabs.executeScript(tabs[0].id, {
        code: scripts
      });
    }
  })
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    switch (request.action) {
      case 'injectStyles':
        injectStyles()
        break
    }
  }
)

chrome.tabs.onActivated.addListener(
  function () {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0].status === 'complete') {
        injectStyles()
      }
    })
  }
)

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      injectStyles()
    }
  }
)
