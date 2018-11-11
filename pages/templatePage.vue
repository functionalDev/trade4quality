<template>
  <section>
    <Headline>
      Template
    </Headline>
  </section>
</template>

<script>
import Headline from '~/components/Headline';

export default {
  data: () => ({

  }),
  components: {
    Headline
  },
  methods: {
    save () {
    },
  },
  // apollo: {
  //   messages: {
  //     query: messageQuery,
  //     subscribeToMore: {
  //       document: gql`subscription {
  //           messageAdded {
  //             id
  //             text
  //           }
  //         }`,
  //         // Variables passed to the subscription. Since we're using a function,
  //         // they are reactive
  //         // Mutate the previous result
  //       updateQuery: (previousResult, { subscriptionData }) => {
  //         return previousResult.messages.push(subscriptionData.data.messageAdded);
  //       },
  //     },
  //   },
  // },
};
</script>

<style scoped>
</style>
