<template>
  <div>
    <h3>URLs</h3>
    <ul class="urls">
      <li class="url" :key="i" v-for="(item, i) in urls">
        <span>{{ item.url }}</span>
        <div class="actions">
          <font-awesome-icon icon="cog" :style="iconStyles" @click="select(i)"/>
          <font-awesome-icon icon="times" :style="iconStyles" @click="deleteUrl(i)"/>
        </div>
      </li>
    </ul>
    <b-button
      variant="outline-primary"
      @click="changeView('new')"
    >
      <font-awesome-icon icon="plus" /> Add
    </b-button>
    <b-button
      variant="outline-primary"
      @click="addCurrentTab()"
    >
      <font-awesome-icon icon="plus" /> Current Tab
    </b-button>
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
</style>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: mapState(['urls']),
  data: function() {
    return {
      iconStyles: {
        color: '#555',
        cursor: 'pointer',
        fontSize: '16px',
        marginLeft: '8px'
      }
    }
  },
  methods: {
    ...mapMutations(['changeView', 'selectUrl']),
    ...mapActions(['addCurrentTab', 'deleteUrl']),
    select(i) {
      this.selectUrl(i)
      this.changeView('details')
    }
  }
}
</script>
