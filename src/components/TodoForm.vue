<template>
<h3>My Todo</h3>

<form v-on:submit.prevent="addTodo"> 
    <div>
        <div>
            <label>Day:  </label>
            <input v-model="newDay" type="date" >
        </div>
        <div>
            <label>内容:  </label>
            <input v-model="newTodo" placeholder="Input here...">
        </div>
        <div>
            <label>時間:  </label>
            <input v-model="newTime" type="number">
        </div>      
        <button class="btn btn-primary" type="submit">ADD</button>
    </div>

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