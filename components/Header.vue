<template>
  <header>
    <nuxt-link to="/" class="logo">
      ⌂
    </nuxt-link>
    <nuxt-link to="/nav" class="nav">
      ≡
    </nuxt-link>
    <nuxt-link to="/user" class="user">
      ⍜
    </nuxt-link>
  </header>
</template>

<script>

export default {
  name: "",
  components: {
  },
  props: {

  },
  data: () => ({

  })
}
</script>

<style scoped>
  a {
    color: inherit;
    text-decoration: none;
  }
  header {
    font-weight: 400;
    font-size: 1.5em;
    position: fixed;
    height: 3rem;
    top: 0;
    left: 0;
    width: 100vw;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
  }
  .logo {
    margin-right: auto;
  }
  header > * {
    padding: 0.5rem;
  }
</style>
