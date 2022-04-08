<template>
  <div class="body-content">
    <div class="input-wrap">
      <p class="title">トレーニング結果を入力</p>
      <ItemForm v-on:add="addItem"></ItemForm>
    </div>
    <ItemList v-bind:Items="Items" v-on:delete="deleteItem"></ItemList>
  </div>
</template>

<script>
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import defItems from '../assets/data.json';

export default {
  name: 'FormAndList',
  components: {
    ItemForm,
    ItemList,
  },
  data(){
    return{
      Items:[],
      nextId: 0,
      defItems: defItems
    }
  },
  created(){
    if(localStorage.getItem('Items')){
      try{
        this.Items = JSON.parse(localStorage.getItem('Items'))
      } catch(e){
        localStorage.removeItem('Items')
      }
    }else{
      localStorage.setItem('Items',JSON.stringify(defItems))
      this.Items = defItems;
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
   addItem (newDay,newItem,newTime) {
    this.nextId++;
    this.Items = [...this.Items, { id: this.nextId, day: newDay, text: newItem, time: newTime }];
    localStorage.setItem('id',this.nextId)
   },
   deleteItem (id) {
    this.Items = this.Items.filter(Item => Item.id !== id);
  }
 },
  watch:{
    Items:{
      handler: function(Items){
        localStorage.setItem('Items',JSON.stringify(Items))
      },
      deep: true
    }
  }
  
}

</script>
