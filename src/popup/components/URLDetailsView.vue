<template>
  <div>
    <h3>URL</h3>
    <div class="url-info" v-if="!editMode">
      <h6>{{ currentUrl.url }}</h6>
      <font-awesome-icon icon="edit" class="icon-button" @click="editUrl()" />
    </div>
    <div class="mb20" v-if="editMode">
      <b-form-group>
        <b-form-input
          id="urlInput"
          type="text"
          v-model="url"
          required
          placeholder="https://www.google.com"
        />
      </b-form-group>
      <b-button variant="outline-primary" @click="saveUrl()">
        <font-awesome-icon icon="save" /> Update
      </b-button>
      <b-button variant="outline-secondary" @click="cancelEdit()">
        <font-awesome-icon icon="times" /> Cancel
      </b-button>
    </div>
    <div v-if="!editMode">
      <h5>Selectors</h5>
      <SelectorsList :list="currentUrl.selectors" />
      <b-button variant="outline-primary" @click="addSelector">
        <font-awesome-icon icon="plus" /> Add
      </b-button>
      <b-button
        variant="outline-secondary"
        @click="changeView('list')"
        v-if="!editMode"
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

export default {
  components: {
    SelectorsList
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
