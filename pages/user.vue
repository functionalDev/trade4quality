<template>
  <section class="container">
    User
    {{
      this.$OneSignal.push(() => {
        this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
          if (isEnabled) {
            console.log('Push notifications are enabled!')
          } else {
            console.log('Push notifications are not enabled yet.')
          }
        })
      })
    }}
  </section>
</template>

<script>
  import WithOfflineListener from '~/components/WithOfflineListener.vue';
  import OfflineIndicator from '~/components/OfflineIndicator.vue';

  export default {
    components: {
      WithOfflineListener,
      OfflineIndicator
    },
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
