import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router'
import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/contacts', component: Contacts},
  {path: '/add-contact', component: AddContact}
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),router
}).$mount('#app')

