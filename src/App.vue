<template>
  <div id="app">
    <navBar />
    <img src="./assets/logo.png">
    <ContactList 
    :title="parentTitle"
    @parentMthd="parentMethod" />
    <!-- <HelloWorld /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue'
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ContactList,
    navBar
  },
  data() {
    return {
      parentTitle: "Parent Contact list"
    }
  },
  methods: {
    parentMethod(value){
      console.log(value);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
