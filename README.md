# Y2 Highlighter

This plugin will highlight specified elements on specific urls. The purpose of this project is  to demonstrate building a Chrome Plugin using Vue.js and Vuex.

### How to use
Please check out this [video](https://www.dropbox.com/s/flzx8yisbr5wu9e/y2h1.mov?dl=0)

1. Add URL
  `Add` will add any url entered in input box.
  `Current Tab` will add url of currently active tab.
2. Add selectors of elements to highlight.
  Click `settings` icon in URL list view.
  Click `Add` button. Fill the input fields and click `Save`.
3. Add values to invert the colors of selected elements
  Click `list` icon in URL details view.
  Add values.

### Develop
```
$ yarn watch
```
And then load dist folder as unpacked chrome extension
