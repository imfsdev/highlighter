<template>
  <div>
    <h6>URL</h6>
    <p>{{ currentUrl.url }}</p>
    <h6>Selector</h6>
    <p>{{ currentSelector.selector }}</p>
    <h6>Highlight Values</h6>
    <ol class="urls">
      <li class="url" :key="i" v-for="(v, i) in currentSelector.hList">
        <span>{{i+1}}. {{ v }}</span>
        <font-awesome-icon icon="times" :style="iconStyles" @click="deleteValue(i)"/>
      </li>
    </ol>
    <AddValue />
  </div>
</template>
<style lang="scss" scoped>
.urls {
  list-style-type: none;
  padding: 0;
}

.url {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
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

