<template>
  <ul class="urls">
    <li class="url" :key="i" v-for="(item, i) in list">
      <span>{{ item.selector }}</span>
      <div class="actions">
        <font-awesome-icon icon="cog" :style="iconStyles" @click="showDetails(i)"/>
        <font-awesome-icon icon="list-ul" :style="iconStyles" @click="showList(i)"/>
        <font-awesome-icon icon="times" :style="iconStyles" @click="deleteSelector(i)"/>
      </div>
    </li>
  </ul>
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
</style>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    list: Array
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
  methods: {
    ...mapMutations(['selector', 'changeView']),
    ...mapActions(['deleteSelector']),
    showDetails(i) {
      this.selector(i)
      this.changeView('selector')
    },
    showList(i) {
      this.selector(i)
      this.changeView('highlightValues');
    }
  }
}
</script>

