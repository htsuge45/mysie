<template>
    <form v-on:submit.prevent="addTodo">
      <table>
        <tr>
          <th>Day</th>
          <td><input v-model="newDay" type="date" /></td>
        </tr>
        <tr>
          <th>内容</th>
          <td><input v-model="newTodo" placeholder="Input here..." /></td>
        </tr>
        <tr>
          <th>時間</th>
          <td><input v-model="newTime" type="number" style="margin-right: 0.5rem"/>分</td>
          <td><button style="margin-left: 2rem;">Add</button></td>
        </tr>
      </table>      
    </form> 






</template>

<script>
export default {
 data () {
   return {
    newDay: '',
    newTodo: '',
    newTime: ''
   }
 },
 emits: ['add'],
 methods: {
   addTodo () {
     if (this.newTodo === '') return;
     this.$emit('add', this.newDay,this.newTodo,this.newTime);
     this.newTodo = '';
   }
 }
}
</script>