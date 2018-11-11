<template>
  <section>
    <div>
        <Headline>Messages:</Headline>
        <div class="message" :key="message.id" v-for="message in (messages)">
          {{
            message.text
          }}
        </div>
    </div>
    <hr>
    <InputField v-model="inMessage" @keyup.enter="save" label="Message"/>
    <button type="button" name="button" @click="save">create message</button>
    <div>
        <!-- User: {{ users[1].username }} -->
    </div>
    <br/>
  </section>
</template>

<script>
import gql from 'graphql-tag';
import Headline from '~/components/Headline';
import InputField from '~/components/InputField';
const messageQuery = gql`
  {
    messages {
      id
      text
    }
  }`;

export default {
  data: () => ({
    inMessage: '',
    messages: [ {
      id: 1,
      text: 'loading...'
    },{
      id: 2,
      text: 'loading...'
    },{
      id: 3,
      text: 'loading...'
    }]
  }),
  components: {
    Headline,
    InputField
  },
  methods: {
    save () {
      console.log(this.inMessage);
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
          const newMessage = subscriptionData.data.messageAdded;
          if ( !( newMessage in previousResult ) ) {
            previousResult.messages.push(subscriptionData.data.messageAdded);
          }
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
  section > * {
    margin-bottom: 10px;
  }
  .message {
    text-align: left;
    padding: 10px;
  }
  .message:nth-child(2n) {
    background-color: rgba(0, 143, 208, 0.2);
  }
  button {
    border: none;
    background-color: #008fd0;
    padding: 10px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
