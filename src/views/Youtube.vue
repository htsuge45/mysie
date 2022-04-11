<template>
  <div class="body-content">
    <div class="youtube-wrap">
      <p class="title">YouTubeでExercise動画を探そう</p>
      <div class="input-wrap-before">
        <!--ItemForm.vue クリックで表示非表示-->
        <a v-on:click="changeShow" v-text="message" v-bind:class="ShowClass"></a>
        <div v-show="isVisible" class="input-wrap">
          <ItemForm v-on:add="addItem"></ItemForm>
        </div>
      </div>
      <!--SearchYoutube.vue-->
      <SearchYoutube></SearchYoutube>
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
  data() {
    return {
      Items: [],
      nextId: 0,
      isVisible: false,
      message: "動画を見たら入力しよう",
      ShowClass: 'open'
    }
  },
  created() {
    if (localStorage.getItem('Items')) {
      try {
        this.Items = JSON.parse(localStorage.getItem('Items')) //LocalStorageのItemsに保存されている内容を取得
      } catch (e) {
        localStorage.removeItem('Items')
      }
    }
    if (localStorage.getItem('id')) { //idは連番で管理
      this.nextId = localStorage.getItem('id');
    }

  },
  methods: {
    addItem(newDay, newItem, newTime) {
      this.nextId++;
      this.Items = [...this.Items, { id: this.nextId, day: newDay, text: newItem, time: newTime }];
      localStorage.setItem('id', this.nextId)
    },
    changeShow() {
      this.isVisible = !this.isVisible;
    },
  },
  watch: {
    Items: { //Itemが更新されたら格納
      handler: function (Items) {
        localStorage.setItem('Items', JSON.stringify(Items))
      },
      deep: true
    },
    isVisible() { //表示非表示でmessageとclassを変更する
      if (this.isVisible == true) {
        this.message = "閉じる";
        this.ShowClass = 'close';
      } else {
        this.message = "動画を見たら入力しよう";
        this.ShowClass = 'open';
      }
    }
  },

}
</script>
<style>
div.youtube-wrap {
  padding: 10px 0;
}

  div.youtube-wrap p.title {
    position: relative;
    font-size: 1.25rem;
    font-weight: bold;
    padding-left: 1.25rem;
  }

    div.youtube-wrap p.title::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border: 0.25rem solid rgb(0, 0, 0);
      border-radius: 0.25rem;
    }

  div.youtube-wrap a.open,
  div.youtube-wrap a.close {
    position: relative;
    cursor: pointer;
    margin-left: 2rem;
    padding-left: 1rem;
  }

    div.youtube-wrap a.close:after {
      content: "";
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      left: 0;
      border-top: 0.75rem solid;
      border-left: 0.4rem solid transparent;
      border-right: 0.4rem solid transparent;
    }

    div.youtube-wrap a.open:after {
      content: "";
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      left: 0;
      border-top: 0.4rem solid transparent;
      border-left: 0.75rem solid;
      border-bottom: 0.4rem solid transparent;
    }

  div.youtube-wrap div.input-wrap-before {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

    div.youtube-wrap div.input-wrap-before div.input-wrap {
      border-bottom: none;
    }

  div.youtube-wrap div.search {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
  }

    div.youtube-wrap div.search button {
      padding: 0.5rem 1rem;
      margin-left: 0.5rem;
    }

  div.youtube-wrap > table {
    margin-right: auto;
  }

    div.youtube-wrap > table tr td {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

      div.youtube-wrap > table tr td a {
        text-decoration: none;
        color: rgb(0,0,0);
      }

      div.youtube-wrap > table tr td:first-of-type {
        min-width: 200px;
        text-align: center;
      }

      div.youtube-wrap > table tr td:first-of-type img {
        height: 100px;
      }

      div.youtube-wrap > table tr td:last-of-type {
        width: 100%;
      }

      div.youtube-wrap > table tr td:last-of-type p {
        margin: 0;
      }

      div.youtube-wrap > table tr td:last-of-type p.video-title {
        color: rgb(199, 21, 133);
        font-size: 1.5rem;
        font-weight: bold;
      }

    div.youtube-wrap > table button {
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
    }

      div.youtube-wrap > table button:first-of-type {
        margin-left: auto;
        margin-right: 1rem;
      }

      div.youtube-wrap > table button:last-of-type {
        margin-right: auto;
        margin-left: 1rem;
      }
      

</style>