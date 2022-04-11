<template>
  <div class="body-content">
    <!--運動記録を入力・一覧表示をするview-->
    <div class="input-wrap">
      <p class="title">トレーニング結果を入力</p>
      <ItemForm v-on:add="addItem"></ItemForm>
      <!--ItemForm.vue-->
    </div>
    <ItemList v-bind:Items="Items" v-on:delete="deleteItem"></ItemList>
    <!--ItemList.vue-->
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
  data() {
    return {
      Items: [],
      nextId: 0,
      defItems: defItems //defaltのリストをdata.jsonに保存
    }
  },
  created() {
    if (localStorage.getItem('Items')) {
      try {
        this.Items = JSON.parse(localStorage.getItem('Items')) //LocalStorageのItemsに保存されている内容を取得
      } catch (e) {
        localStorage.removeItem('Items')
      }
    } else {
      localStorage.setItem('Items', JSON.stringify(defItems)) //Itemsに保存されていない場合はdefaltのリストをセット
      this.Items = defItems;

    }
    if (localStorage.getItem('id')) { //idは連番で管理
      this.nextId = localStorage.getItem('id');
    } else {
      this.nextId = 20; //defaltの項目数
      localStorage.setItem('id', this.nextId);
    }

  },
  methods: {
    addItem(newDay, newItem, newTime) { //フォーム入力
      this.nextId++;
      this.Items = [...this.Items, { id: this.nextId, day: newDay, text: newItem, time: newTime }];
      localStorage.setItem('id', this.nextId)
    },
    deleteItem(id) { //アイテム削除
      this.Items = this.Items.filter(Item => Item.id !== id);
    }
  },
  watch: {
    Items: { //アイテムの内容の変更を反映
      handler: function (Items) {
        localStorage.setItem('Items', JSON.stringify(Items))
      },
      deep: true
    }
  }

}

</script>

<style>
div.input-wrap {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

  div.input-wrap p.title {
    position: relative;
    font-size: 1.25rem;
    font-weight: bold;
    padding-left: 1.25rem;
  }

  div.input-wrap p.title::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 0.25rem solid rgb(0, 0, 0);
    border-radius: 0.25rem;
  }

  div.input-wrap table {
    padding-left: 2rem;
  }

    div.input-wrap table th {
      font-weight: normal;
      min-width: 100px;
      font-size: 1.1rem;
      height: 50px;
    }

div.result-wrap {
  padding-bottom: 5rem;
}

  div.result-wrap p.title {
    position: relative;
    font-size: 1.25rem;
    font-weight: bold;
    padding-left: 1.25rem;
  }

    div.result-wrap p.title::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border: 0.25rem solid rgb(0, 0, 0);
      border-radius: 0.25rem;
    }

  div.result-wrap table {
    display: block;
    overflow: auto;
    max-height: calc(100vh - 200px);
  }

    div.result-wrap table > tbody tr:nth-child(2n + 1) {
      background-color: rgb(254, 229, 234);
    }

    div.result-wrap table > tbody tr:nth-child(2n) {
      background-color: rgb(255, 250, 251);
    }

    div.result-wrap table > tbody td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 5px 10px;
      white-space: nowrap;
    }

    div.result-wrap table > tbody td:nth-child(2) {
      width: 100%;
    }

    div.result-wrap table > tbody td:nth-child(2) input {
      width: 100%;
    }

    div.result-wrap table > tbody td input:read-only {
      background-color: transparent;
      border: none;
    }

    div.result-wrap table > tbody td input:read-only:focus {
      box-shadow: none;
    }
</style>