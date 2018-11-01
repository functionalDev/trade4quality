<template>
  <section class="container">
    <input type="text" name="" v-model="inMessage">
    <button type="button" name="button" @click="save">create message</button>
    <div>
        <!-- User: {{ users[1].username }} -->
    </div>
    <hr>
    <div>
        Messages:
        <div class="message" :key="message.id" v-for="message in messages">
          {{
            `${message.id} ${message.text}`
          }}
        </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag';
const messageQuery = gql`
  {
    messages {
      id
      text
    }
  }`;

  export default {
    data() {
      return {
        inMessage: '',
      }
    },
    methods: {
      save() {
        this.$apollo.mutate({mutation: gql`
          mutation {
            createMessage(text: "${this.inMessage}") {
              text
            }
          }`
        });
      }
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
        }
      }
    },
    // apollo: {
    //   messageAdded: gql`subscription {
    //     messageAdded {
    //       text
    //     }
    //   }`,
    // },
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  .message {
    border: 1px solid lightgrey;
    text-align: left;
  }
</style>
