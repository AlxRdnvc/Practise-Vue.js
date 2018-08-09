<template>
    <div>
        <h1>Contacts</h1>
    </div>
</template>
<script>
export default {
   name: 'Contacts',
   data(){
        return {
            contacts: [
            { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
            { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
            { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
            ]
        };
   }
}
</script>

