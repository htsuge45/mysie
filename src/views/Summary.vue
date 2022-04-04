<template>
  <div class="calender">
    <h5>This is a calender page</h5>
    <TodoCalendar v-bind:todos="todos"></TodoCalendar>
  </div>
</template>

<script>
import TodoCalendar from '../components/TodoCalendar.vue'

export default {
  name: 'SummaryCalender',
  components: {
    TodoCalendar,
  },
  data(){
    return{
      todos:[],
    }
  },
  mounted(){
    if(localStorage.getItem('todos')){
      try{
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch(e){
        localStorage.removeItem('todos')
      }
    }
  }
}
</script>
