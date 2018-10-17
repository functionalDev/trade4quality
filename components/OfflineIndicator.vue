<template>
  <div  :class="['network', online ? 'online' : 'offline']">
      {{ online ? 'online' : 'offline' }}
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    online: Boolean,
  },
  data: () => ({

  })
}
</script>

<style scoped>
.network {
  opacity: 0;
  transition: opacity 0.5s 1s, background 0.5s;
  font-weight: 400;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: green;
}

.network.offline {
  opacity: 1;
  transition: opacity 0.5s;
  background: grey;
}
</style>
