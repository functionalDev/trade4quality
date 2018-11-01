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
    box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.2);
  }
  .logo {
    margin-right: auto;
  }
  header > * {
    padding: 0.5rem;
  }
</style>
