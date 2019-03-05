<template>
  <div>
    <b-button
      variant="outline-primary"
      @click="showInputField()"
      v-if="!editMode"
    >
      <font-awesome-icon icon="plus" /> Add
    </b-button>
    <b-button
      variant="outline-secondary"
      @click="changeView('details')"
      v-if="!editMode"
    >
      <font-awesome-icon icon="long-arrow-alt-left" /> Back
    </b-button>
    <div v-if="editMode">
      <b-form-group>
        <b-form-input type="text" v-model="valueInput" required />
      </b-form-group>
      <b-button variant="primary" size="small" @click="add()">
        <font-awesome-icon icon="save" /> Save
      </b-button>
      <b-button variant="outline-secondary" size="small" @click="cancel()">
        Cancel
      </b-button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      editMode: false,
      valueInput: '',
      iconStyles: {
        color: '#555',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '0 0 0 8px'
      }
    }
  },
  methods: {
    ...mapMutations(['changeView']),
    ...mapActions(['addValue']),
    showInputField() {
      this.valueInput = ''
      this.editMode = true
    },
    add() {
      this.addValue(this.valueInput)
      this.editMode = false
    },
    cancel() {
      this.editMode = false
    }
  }
}
</script>

