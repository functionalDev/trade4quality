<template>
  <div>
    <Header/>
    <nuxt class="container"/>
    <WithOfflineListener>
      <OfflineIndicator slot-scope="{ online }" :online="online"/>
    </WithOfflineListener>
  </div>
</template>

<script>
import WithOfflineListener from '~/components/WithOfflineListener.vue';
import OfflineIndicator from '~/components/OfflineIndicator.vue';
import Header from '~/components/Header.vue';

export default {
  name: "",
  components: {
    Header,
    WithOfflineListener,
    OfflineIndicator
  },
  props: {

  },
  data: () => ({

  })
}
</script>

<style>

html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.container {
  width: 100vw;
  margin: auto auto;
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
}
@media only screen and (min-width: 700px) {
  .container {
    width: 75vw;
  }
}
@media only screen and (min-width: 1000px) {
    .container {
      width: 60vw;
    }
}
</style>
