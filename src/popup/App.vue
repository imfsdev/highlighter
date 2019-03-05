<template>
  <div class="app">
    <URLListView v-if="view === 'list'"/>
    <URLAddView v-if="view === 'new'" />
    <URLDetailsView v-if="view === 'details'" />
    <SelectorView v-if="view === 'selector'" />
    <HighlightValuesView v-if="view === 'highlightValues'" />
  </div>
</template>
<style lang="scss">
.app {
  min-width: 400px;
  padding: 16px;
}
.helper-text {
  color: #666;
}
</style>
<script>
import URLListView from './components/URLListView.vue'
import URLAddView from './components/URLAddView.vue'
import URLDetailsView from './components/URLDetailsView.vue'
import SelectorView from './components/SelectorView.vue'
import HighlightValuesView from './components/HighlightValuesView.vue'
import { mapState } from 'vuex'

export default {
  components: {
    URLListView,
    URLAddView,
    URLDetailsView,
    SelectorView,
    HighlightValuesView
  },
  computed: mapState(['view'])
}
</script>

