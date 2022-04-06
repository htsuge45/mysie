<template>
  <div class="result-wrap">
    <p class="title">結果一覧</p>
    <table>
      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo.id">
          <td> <input type="date" :readonly="editIndex != todo.id" v-model="todo.day"> </td>
          <td> <input type="text" :readonly="editIndex != todo.id" v-model="todo.text"> </td>
          <td> <input type="number" :readonly="editIndex != todo.id" v-model="todo.time"> 分 </td>

          <td>
            <button  v-on:click="updateTodo(todo.id)" :hidden="editIndex == todo.id">修正</button>
            <button :hidden="editIndex != todo.id" v-on:click="completeTodo()" >完了</button>
          </td>

          <td>
            <button v-on:click="deleteTodo(todo.id)">DEL</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
 props: ['todos'],
 emits: ['delete'],
 data(){
   return{
     editIndex: -1,
   }
 },
 methods: {
    deleteTodo (id) {
      this.$emit('delete', id);
    },
    updateTodo(id){
      this.editIndex = this.editIndex > 0 ? -1 : id;
    },
    completeTodo(){
      this.editIndex = -1;
    }
 }
}
</script>