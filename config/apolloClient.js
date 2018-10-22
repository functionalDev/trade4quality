import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export default (ctx) => {
  console.log();
  let link = null;

  if (!process.browser) {
    link = new HttpLink({ uri: 'https://trade4qualityservice-avythvdlla.now.sh/graphql' });
  } else {
    const client = new SubscriptionClient('ws://trade4qualityservice-avythvdlla.now.sh/graphql', {
      reconnect: true,
    });

    link = new WebSocketLink(client);
  }

  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
};
