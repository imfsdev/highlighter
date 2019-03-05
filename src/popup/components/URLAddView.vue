<template>
  <div>
    <h3>Add url</h3>
    <b-form>
      <b-form-group label="URL" label-for="urlInput">
        <b-form-input
          id="urlInput"
          type="text"
          v-model="url"
          required
          placeholder="https://www.google.com"
        />
      </b-form-group>
      <b-button
        variant="primary"
        size="small"
        @click="save()"
      >
        <font-awesome-icon icon="save" /> Save
      </b-button>
      <b-button
        variant="outline-secondary"
        size="small"
        @click="changeView('list')"
      >
        Cancel
      </b-button>
    </b-form>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    ...mapMutations(['changeView']),
    ...mapActions(['addUrl']),
    save() {
      if (!this.url) {
        return
      }

      this.addUrl(this.url)
      this.changeView('list')
    }
  }
}
</script>
