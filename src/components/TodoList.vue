<template>
 <h5>Todo List</h5>
 <table class="table">
    <tr v-for="todo in todos" v-bind:key="todo.id">
        <th> {{ todo.day }} </th>
        <td> {{ todo.text }} </td>
        <td> {{ todo.time }} </td>
        <td class="state">
           <!-- <button v-on:click="ChangeState(todo)">{{ labels[todo.status] }}</button>
        -->
        </td>
        <td>
            <button class="button btn-danger" v-on:click="deleteTodo(todo.id)">DEL</button>
        </td>
 </tr>
 </table>
</template>

<script>
export default {
 props: ['todos'],
 emits: ['delete'],
 methods: {
   deleteTodo (id) {
     this.$emit('delete', id);
   },
 }
}
</script>