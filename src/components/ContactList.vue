<template>
    <div>
        <h1>Contact List</h1>
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr v-for="(contact, key) in contacts" :key="key">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'ContactList',
  data() {
      return {
          contacts: [
              {name: "Srecko", email: "Srecko@gmail.com"},
              {name: "Dara", email: "Dara@gmail.com"},
              {name: "Mitar", email: "Mitar@gmail.com"},
              {name: "Nevena", email: "Nevena@gmail.com"}
          ]
      };
  }
}
</script>