<template>
  <img :src="getSrc({ fileName })">
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods: {
    getSrc: ({ fileName }) => {
      return require(`~/assets/img/${fileName}`);
    }
  },
  props: {
    fileName: {
      type: String,
    },
  }
}
</script>
<style scoped>
img {
  filter: brightness(100%);
}
</style>
