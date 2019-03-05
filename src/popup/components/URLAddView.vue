<template>
  <div>
    <h3>{{ title }}</h3>
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
      <b-form-group label="Delay(ms)" label-for="delayInput">
        <b-form-input
          id="delayInput"
          type="text"
          v-model="delay"
          required
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
        @click="cancel()"
      >
        Cancel
      </b-button>
    </b-form>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    details: Object
  },
  data() {
    return {
      title: 'Add URL',
      url: '',
      delay: 100
    }
  },
  methods: {
    ...mapMutations(['changeView']),
    ...mapActions(['addUrl', 'updateUrl']),
    save() {
      if (!this.url) {
        return
      }

      if (this.details) {
        this.updateUrl({ url: this.url, delay: this.delay })
        this.$emit('cancel')
      } else {
        this.addUrl({ url: this.url, delay: this.delay })
        this.changeView('list')
      }
    },
    cancel() {
      if (this.details) {
        this.$emit('cancel')
      } else {
        this.changeView('list')
      }
    },
  },
  mounted() {
    if (this.details) {
      this.url = this.details.url
      this.delay = this.details.delay || 100
      this.title = 'Update URL'
    }
  }
}
</script>
