<template>
  <section>
    <Headline>
      Notofications
    </Headline>
  </section>
</template>

<script>
import gql from 'graphql-tag';
import Headline from '~/components/Headline';
const messageQuery = gql`
  {
    messages {
      id
      text
    }
  }`;

export default {
  data () {
    return {
      inMessage: '',
    };
  },
  components: {
    Headline
  },
  methods: {
    save () {
      this.$apollo.mutate({mutation: gql`
          mutation {
            createMessage(text: "${this.inMessage}") {
              text
            }
          }`,
      });
    },
  },
  apollo: {
    messages: {
      query: messageQuery,
      subscribeToMore: {
        document: gql`subscription {
            messageAdded {
              id
              text
            }
          }`,
          // Variables passed to the subscription. Since we're using a function,
          // they are reactive
          // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          return previousResult.messages.push(subscriptionData.data.messageAdded);
        },
      },
    },
  },
    // apollo: {
    //   messageAdded: gql`subscription {
    //     messageAdded {
    //       text
    //     }
    //   }`,
    // },
};
</script>

<style scoped>

h1 {
  color: #008fd0;
}
  .message {
    border: 1px solid lightgrey;
    text-align: left;
  }
</style>
