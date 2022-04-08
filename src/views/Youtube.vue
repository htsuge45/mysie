<template>
  <div class="body-content">
    <div class="youtube-wrap">
      <p class="title">YouTubeでExercise動画を探そう</p>
      <div class="input-wrap-before">
        <a v-on:click="changeShow" v-text="message" v-bind:class="ShowClass"></a>
        <div v-show="isVisible" class="input-wrap">    
          <ItemForm v-on:add="addItem"></ItemForm>
        </div>
      </div>
      <SearchYoutube ></SearchYoutube>
    </div>
    
  </div>
</template>

<script>
import SearchYoutube from '../components/SearchYoutube.vue'
import ItemForm from '../components/ItemForm';

export default {
  name: 'ListYoutube',
  components: {
    SearchYoutube,
    ItemForm,
  },
 data(){
    return{
      Items:[],
      nextId: 0,
      isVisible: false,
      message: "動画を見たら入力しよう",
      ShowClass: 'open'
    }
  },
  ounted(){
    if(localStorage.getItem('Items')){
      try{
        this.Items = JSON.parse(localStorage.getItem('Items'))
      } catch(e){
        localStorage.removeItem('Items')
      }
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
  },
  changeShow(){
    this.isVisible = !this.isVisible;
  }
 },
  watch:{
    Items:{
      handler: function(Items){
        localStorage.setItem('Items',JSON.stringify(Items))
      },
      deep: true
    },
    isVisible(){
      if(this.isVisible == true){
        this.message = "閉じる";
        this.ShowClass = 'close';
      }else{
        this.message = "動画を見たら入力しよう";
        this.ShowClass = 'open';
      }
    }
  },

}
</script>
