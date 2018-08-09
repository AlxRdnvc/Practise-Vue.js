<template>
    <div>
        <h1>{{ title }}</h1>

        <form @submit.prevent>
            <label for="name">Name</label>
            <input v-model="newContact.name" type="text" placeholder="name"><br>

            <label for="email">Email</label>
            <input v-model="newContact.email" type="text" placeholder="email"><br>

            <button @click="addContact()" type="submit">Add Contact</button>
        </form>

        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(contact, key) in contacts" :key="key">
                    <td v-if="contact.name === 'Srecko' ">Sreckovic</td>
                    <td v-else>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td><button @click="deleteContact(contact)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        <button @click="callParentMethod" type="submit">Parent Method</button><br>
    </div>
</template>

<script>
export default {
  name: 'ContactList',
  props: ['title'],
  data() {
      return {
          newContact: {
              name:'',
              email:''
          },
        
          contacts: [
              {name: "Srecko", email: "Srecko@gmail.com"},
              {name: "Dara", email: "Dara@gmail.com"},
              {name: "Mitar", email: "Mitar@gmail.com"},
              {name: "Nevena", email: "Nevena@gmail.com"}
          ]
      };
  },
  methods: {
      addContact(){
          this.contacts.push(this.newContact);
          this.newContact = {};
      },
      deleteContact(contact){
          let indexOfContactToDelete = this.contacts.indexOf(contact);
          this.contacts.splice(indexOfContactToDelete, 1);
      },
      callParentMethod(){
          this.$emit('parentMthd', 'Aleksandar');
      }
  }
}
</script>