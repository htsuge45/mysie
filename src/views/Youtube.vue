<template>
  <div class="youtube">
    <h5>This is a YoutubeList page</h5>
    <SearchYoutube v-bind:todos="todos"></SearchYoutube>
  </div>
</template>

<script>
import SearchYoutube from '../components/SearchYoutube.vue'

export default {
  name: 'ListYoutube',
  components: {
    SearchYoutube,
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
