<template>
  <div class="home">
    <TodoForm v-on:add="addTodo"></TodoForm>
    <TodoList v-bind:todos="todos" v-on:delete="deleteTodo"></TodoList>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import deftodos from '../assets/data.json';

export default {
  name: 'HomeList',
  components: {
    TodoForm,
    TodoList,
  },
  data(){
    return{
      todos:[],
      nextId: 0,
      deftodos: deftodos
    }
  },
  created(){
    if(localStorage.getItem('todos')){
      try{
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch(e){
        localStorage.removeItem('todos')
      }
    }else{
      localStorage.setItem('todos',JSON.stringify(deftodos))
      this.todos = deftodos;
      console.log("aa");

    }
    if(localStorage.getItem('id')){
      this.nextId = localStorage.getItem('id');
    }else{
      this.nextId = 3;
      localStorage.setItem('id',this.nextId);
    }

  },
  methods: {
   addTodo (newDay,newTodo,newTime) {
    this.nextId++;
    this.todos = [...this.todos, { id: this.nextId, day: newDay, text: newTodo, time: newTime }];
    localStorage.setItem('id',this.nextId)
   },
   deleteTodo (id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
 },
  watch:{
    todos:{
      handler: function(todos){
        localStorage.setItem('todos',JSON.stringify(todos))
      },
      deep: true
    }
  }
  
}

</script>
