<template>
  <div @click="subscribe">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods: {
    subscribe () {
      console.log('subscribe');
      this.$OneSignal.push(() => {
        this.$OneSignal.registerForPushNotifications();
      });
      // this.$OneSignal.push(() => {
        // this.$OneSignal.provideUserConsent(true);
      // });
      // this.$OneSignal.push(() => {
      //   this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
      //     if (isEnabled) {
      //       console.log('Push notifications are enabled!');
      //     } else {
      //       console.log('Push notifications are not enabled yet.');
      //     }
      //   });
      // });
    },
  }
}
</script>
<style lang="css" scoped>
  div {
    display: contents;
  }
</style>
