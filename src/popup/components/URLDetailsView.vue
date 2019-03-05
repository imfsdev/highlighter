<template>
  <div>
    <URLAddView :details="currentUrl" @cancel="cancelEdit()" v-if="editMode" />
    <div v-if="!editMode">
      <h3>URL</h3>
      <div class="url-info">
        <h6>{{ currentUrl.url }}</h6>
        <font-awesome-icon icon="edit" class="icon-button" @click="editUrl()" />
      </div>
      <h5>Selectors</h5>
      <SelectorsList :list="currentUrl.selectors" />
      <b-button variant="outline-primary" @click="addSelector">
        <font-awesome-icon icon="plus" /> Add Selector
      </b-button>
      <b-button
        variant="outline-secondary"
        @click="changeView('list')"
      >
        <font-awesome-icon icon="long-arrow-alt-left" /> Back
      </b-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.url-info {
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  h6 {
    margin: 0 20px 0 0;
    word-break: break-all;
  }
}
</style>

<script>
import { mapMutations, mapGetters, mapState, mapActions } from "vuex"
import SelectorsList from './SelectorsList.vue'
import URLAddView from './URLAddView.vue'

export default {
  components: {
    SelectorsList,
    URLAddView
  },
  computed: {
    ...mapGetters(['currentUrl']),
    ...mapState(['selectedId'])
  },
  data() {
    return {
      editMode: false,
      url: ''
    }
  },
  methods: {
    ...mapMutations(["changeView", "selector"]),
    ...mapActions(['updateUrl']),
    editUrl() {
      this.url = this.currentUrl.url
      this.editMode = true
    },
    saveUrl() {
      this.updateUrl(this.url)
      this.editMode = false
    },
    cancelEdit() {
      this.editMode = false
    },
    addSelector() {
      this.selector(-1);
      this.changeView('selector')
    }
  }
}
</script>
