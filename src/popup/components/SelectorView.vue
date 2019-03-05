<template>
  <div>
    <b-form-group label="Selector" label-for="selectorInput">
      <b-form-input
        id="selectorInput"
        type="text"
        v-model="selector"
        required
      />
    </b-form-group>
    <hr />
    <b-form-group label="Default Background Color" label-for="dbgInput">
      <b-form-input
        id="dbgInput"
        type="text"
        v-model="defaultBgColor"
        required
      />
    </b-form-group>
    <b-form-group label="Default Color" label-for="dcInput">
      <b-form-input
        id="dcInput"
        type="text"
        v-model="defaultColor"
        required
      />
    </b-form-group>
    <div class="preview">
      <span :style="defaultStyle">Lorel Ipsum</span>
    </div>
    <hr />
    <b-form-group label="Highlight Background Color" label-for="hbgInput">
      <b-form-input
        id="hbgInput"
        type="text"
        v-model="highlightBgColor"
        required
      />
    </b-form-group>
    <b-form-group label="Highlight Color" label-for="hcInput">
      <b-form-input
        id="hcInput"
        type="text"
        v-model="highlightColor"
        required
      />
    </b-form-group>
    <div class="preview">
      <span :style="highlightStyle">Lorel Ipsum</span>
    </div>
    <hr />
    <b-button variant="outline-primary" @click="save()">
      <font-awesome-icon icon="save" /> Save
    </b-button>
    <b-button variant="outline-secondary" @click="changeView('details')">
      <font-awesome-icon icon="times" /> Cancel
    </b-button>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      details: 'currentSelector'
    }),
    defaultStyle() {
      return {
        backgroundColor: this.defaultBgColor || 'transparent',
        color: this.defaultColor || '#000',
        padding: '8px',
        fontSize: '20px'
      }
    },
    highlightStyle() {
      return {
        backgroundColor: this.highlightBgColor || 'transparent',
        color: this.highlightColor || '#000',
        padding: '8px',
        fontSize: '20px'
      }
    }
  },
  data() {
    return {
      selector: '',
      defaultBgColor: '',
      defaultColor: '',
      highlightBgColor: '',
      highlightColor: '',
      new: false
    }
  },
  mounted() {
    if (!this.details.selector) {
      this.new = true
    }

    this.selector = this.details.selector
    this.defaultBgColor = this.details.defaultBgColor
    this.defaultColor = this.details.defaultColor
    this.highlightBgColor = this.details.highlightBgColor
    this.highlightColor = this.details.highlightColor
  },
  methods: {
    ...mapMutations(['changeView']),
    ...mapActions(['addSelector', 'updateSelector']),
    save() {
      if (!this.selector) {
        return
      }

      if (this.new) {
        this.addSelector({
          selector: this.selector,
          defaultBgColor: this.defaultBgColor,
          defaultColor: this.defaultColor,
          highlightBgColor: this.highlightBgColor,
          highlightColor: this.highlightColor,
          hList: this.details.hList || []
        })
      } else {
        this.updateSelector({
          selector: this.selector,
          defaultBgColor: this.defaultBgColor,
          defaultColor: this.defaultColor,
          highlightBgColor: this.highlightBgColor,
          highlightColor: this.highlightColor,
          hList: this.details.hList || []
        })
      }
      this.changeView('details')
    }
  }
}
</script>
