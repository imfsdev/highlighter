<template>
  <div>
    <h6>Highlight Values</h6>
    <AddValue />
    <div class="container">
      <span class="chip" :key="i" v-for="(v, i) in currentSelector.hList">
        {{ v }}
        <font-awesome-icon icon="times" :style="iconStyles" @click="deleteValue(i)"/>
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  list-style-type: none;
  padding: 0;
  margin: 10px -4px 0;
}

.chip {
  padding: 4px 8px;
  display: inline-block;
  font-size: 16px;
  margin: 4px;
  background: #ddd;
  border-radius: 4px;
}

p {
  word-break: break-all;
}
</style>

<script>
import AddValue from './AddValue.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AddValue
  },
  computed: {
    ...mapGetters(['currentUrl', 'currentSelector'])
  },
  data() {
    return {
      iconStyles: {
        color: '#555',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '0 0 0 8px'
      }
    }
  },
  methods: mapActions(['deleteValue'])
}
</script>

