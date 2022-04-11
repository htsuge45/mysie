<template>
  <div class="result-wrap">
    <!--運動結果一覧表示コンポーネント -->
    <p class="title">結果一覧</p>
    <table>
      <tbody>
        <tr v-for="Item in Items" v-bind:key="Item.id">
          <td> <input type="date" :readonly="editIndex != Item.id" v-model="Item.day"> </td>
          <td> <input type="text" :readonly="editIndex != Item.id" v-model="Item.text"> </td>
          <td> <input type="number" :readonly="editIndex != Item.id" v-model="Item.time"> 分 </td>

          <td>
            <button  v-on:click="updateItem(Item.id)" :hidden="editIndex == Item.id">修正</button>
            <button :hidden="editIndex != Item.id" v-on:click="completeItem()" >完了</button>
          </td>

          <td>
            <button v-on:click="deleteItem(Item.id)">DEL</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
 props: ['Items'],
 emits: ['delete'],
 data(){
   return{
     editIndex: -1,
   }
 },
 methods: {
    deleteItem (id) { //削除
      this.$emit('delete', id);
    },
    updateItem(id){ //修正
      this.editIndex = this.editIndex > 0 ? -1 : id; //editIndexをidと合わせることで修正できるようにする
    },
    completeItem(){ //完了
      this.editIndex = -1;
    }
 }
}
</script>