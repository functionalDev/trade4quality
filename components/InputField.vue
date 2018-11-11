<template>
  <label >
    {{ label }}
    <input v-on="inputListeners" type="text" :value="value">
  </label>
</template>
<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          keyup: function (event) {
            vm.$emit('keyup', event);
          },
          input: function (event) {
            vm.$emit('change', event.target.value);
          }
        }
      )
    }
  },
  props: {
    id: {
      default: Math.random()*100
    },
    value: {
      type: String,
    },
    modelValue: {
      default: ""
    },
    label: {
      type: String,
      required: true
    },
  },
  methods: {
  }
}
</script>
<style scoped>
  label {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px 5px 0 0 ;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 5px 10px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
  }
  input {
    border: none;
    width: 100%;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
  }
</style>
