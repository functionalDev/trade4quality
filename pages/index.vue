<template>
  <section>
    <Headline> Agenda </Headline>
    <table cellspacing="0">
      <thead>
        <th></th>
        <th>name</th>
        <th>Presenter</th>
      </thead>
      <tbody>
        <tr v-for="card in agenda" :class="[card.labels.toLowerCase()]">
          <td :class="['label', card.labels.toLowerCase()]">
            <div >
              {{ card.labels }}
            </div>
          </td>
          <td>{{ card.name }}</td>
          <td>{{ card.members }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import gql from 'graphql-tag';
import Headline from '~/components/Headline';
const agenda = gql`
  {
    agenda: currentAgenda {
      labels
      name
      members
    }
  }`;
export default {
    data() {
      return {
        agenda: [{
          labels: '',
          name: 'loading',
          members: '...',
        }],
      }
    },
    components: {
      Headline,
    },
    // methods: {
    //   getMembers(card) {
    //     return card.members !== ''
    //       ? ` (${card.members})`
    //       : ''
    //   }
    // },
    apollo: {
      agenda: {
        query: agenda,
        // subscribeToMore: {
        //   document: gql`subscription {
        //     messageAdded {
        //       id
        //       text
        //     }
        //   }`,
        //   // Variables passed to the subscription. Since we're using a function,
        //   // they are reactive
        //   // Mutate the previous result
        //   updateQuery: (previousResult, { subscriptionData }) => {
        //     // Here, return the new result from the previous with the new data
        //     console.log('subscriptionData', subscriptionData.data);
        //     console.log('previousResult', ...previousResult.messages);
        //     return previousResult.messages.push(subscriptionData.data.messageAdded);
        //   },
        // }
      },
    },
  }

</script>

<style scoped>

table {
  text-align: left;
  min-width: 50vw;
  margin: 10px auto;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
}
tr:hover {
  background-color: rgba(200, 200, 200, 0.2);
}
li {
  padding: 0 10px;
}
td {
  margin-left: 50px;
}
td, th {
  padding: 10px;
}
td {
  border-top: 1px solid lightgrey;
}

tr.js {
  background-image: linear-gradient(to left, transparent 80%, yellow);
}
tr.orga {
  background-image: linear-gradient(to left, transparent 80%, grey);
}
tr.css {
  background-image: linear-gradient(to left, transparent 80%, blue);
}
tr.html {
  background-image: linear-gradient(to left, transparent 80%, orange);
}
.js .label > div{
  color: black;
}
  /* .js > div {
    background-color: yellow;
  }
  .orga > div {
    background-color: grey;
    color: white;
  }
  .css > div {
    background-color: blue;
    color: white;
  }
  .html > div {
    background-color: orange;
    color: white;
  } */
  .label > div {
    padding: 3px 10px;
    color: white;
  }
</style>
