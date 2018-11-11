<template>
  <header>
    <nuxt-link to="/" class="left">
      <Home/>
    </nuxt-link>
    <nuxt-link to="/nav" class="left">
      <Menu/>
    </nuxt-link>
    <nuxt-link to="/notifications" class="right">
      <NotificationButton>
        <Bell/>
      </NotificationButton>
    </nuxt-link>
    <nuxt-link to="/user" class="right">
      <User/>
    </nuxt-link>
  </header>
</template>

<script>
import Home from './icons/Home';
import User from './icons/User';
import Menu from './icons/Menu';
import Bell from './icons/Bell';
import NotificationButton from './NotificationButton';

export default {
  name: "",
  components: {
    NotificationButton,
    Bell,
    Menu,
    User,
    Home
  },
}
</script>

<style scoped>
  svg {
    width: 50px;
    height: 50px;
    fill: white;
    padding: 15px;
  }
  svg:hover {
    padding: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  header {
    padding: 0 10px;
    background: #008fd0;
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
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    opacity: 0.55;
  }
  .left:nth-child(2) {
    margin-right: auto;
  }
</style>
