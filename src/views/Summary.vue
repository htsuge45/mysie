<template>
  <div class="body-content">
    <ItemCalendar v-bind:Items="Items"></ItemCalendar>
  </div>
</template>

<script>
import ItemCalendar from '../components/ItemCalendar.vue'

export default {
  name: 'SummaryCalender',
  components: {
    ItemCalendar,
  },
  data(){
    return{
      Items:[],
    }
  },
  mounted(){
    if(localStorage.getItem('Items')){
      try{
        this.Items = JSON.parse(localStorage.getItem('Items'))
      } catch(e){
        localStorage.removeItem('Items')
      }
    }
  }
}
</script>
