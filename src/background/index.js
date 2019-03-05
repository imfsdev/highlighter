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
        ${s.selector}.ext_selected {
          background: ${s.highlightBgColor};
          color: ${s.highlightColor};
          font-size: ${s.fontSize};
          padding: ${s.padding};
        }
        ${s.selector} {
          background: ${s.defaultBgColor};
          color: ${s.defaultColor};
          font-size: ${s.fontSize || '1em'};
          padding: ${s.padding};
        }
      `).join('\n');

      const selectors = url.selectors.map(s => ({
        selector: s.selector,
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
              var elements = document.querySelectorAll(s.selector);
              elements.forEach(el => {
                if(s.hList.indexOf(el.innerText.toLowerCase()) >= 0) {
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
      console.log(tabs)
      if (tabs[0].status === 'complete') {
        injectStyles()
      }
    })
  }
)

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    console.log(changeInfo)
    if (changeInfo.status === 'complete') {
      injectStyles()
    }
  }
)