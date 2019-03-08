<template>
  <div>
    <h6>Selectors</h6>
    <div class="selector-line" :key="i" v-for="(selector, i) in list">
      <b-form-group>
        <b-form-input
          type="text"
          v-model="list[i]"
          required
        />
      </b-form-group>
      <font-awesome-icon icon="times" @click="deleteSelector(i)"/>
    </div>
    <b-button variant="outline-primary" @click="addSelector()">Add</b-button>
    <hr />
    <b-form-group label="Font Size" label-for="fontSizeInput">
      <b-form-input
        id="fontSizeInput"
        type="text"
        v-model="fontSize"
        required
      />
    </b-form-group>
    <b-form-group label="Padding" label-for="paddingInput">
      <b-form-input
        id="paddingInput"
        type="text"
        v-model="padding"
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
<style lang="scss" scoped>
.selector-line {
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  .form-group {
    margin-bottom: 0;
    flex: 1;
  }

  .fa-times {
    color: #555;
    cursor: pointer;
    font-size: 16px;
    margin: 0 0 0 8px;
    flex: none;
  }
}
</style>
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
        padding: this.padding || '0px',
        fontSize: this.fontSize || '1em'
      }
    },
    highlightStyle() {
      return {
        backgroundColor: this.highlightBgColor || 'transparent',
        color: this.highlightColor || '#000',
        padding: this.padding || '0px',
        fontSize: this.fontSize || '1em'
      }
    }
  },
  data() {
    return {
      list: [''],
      defaultBgColor: '',
      defaultColor: '',
      highlightBgColor: '',
      highlightColor: '',
      padding: '',
      fontSize: '',
      new: false
    }
  },
  mounted() {
    if (!this.details.selector) {
      this.new = true
    }

    this.list = this.details.list
    this.defaultBgColor = this.details.defaultBgColor
    this.defaultColor = this.details.defaultColor
    this.highlightBgColor = this.details.highlightBgColor
    this.highlightColor = this.details.highlightColor
    this.padding = this.details.padding
    this.fontSize = this.details.fontSize
  },
  methods: {
    ...mapMutations(['changeView']),
    ...mapActions(['addSelector', 'updateSelector']),
    save() {
      if (!this.list || !this.list[0]) {
        return
      }

      this.list = this.list.filter(s => s)

      if (this.new) {
        this.addSelector({
          list: this.list,
          defaultBgColor: this.defaultBgColor,
          defaultColor: this.defaultColor,
          highlightBgColor: this.highlightBgColor,
          highlightColor: this.highlightColor,
          fontSize: this.fontSize,
          padding: this.padding,
          hList: this.details.hList || []
        })
      } else {
        this.updateSelector({
          list: this.list,
          defaultBgColor: this.defaultBgColor,
          defaultColor: this.defaultColor,
          highlightBgColor: this.highlightBgColor,
          highlightColor: this.highlightColor,
          fontSize: this.fontSize,
          padding: this.padding,
          hList: this.details.hList || []
        })
      }
      this.changeView('details')
    },
    addSelector() {
      this.list.push('')
    },
    deleteSelector(i) {
      this.list.splice(i, 1)
    }
  }
}
</script>
