<template>
  <!--検索-->
  <div class="search">
    <input size="30" v-model="keyword" placeholder="検索キーワードを入力">
    <button v-on:click="search_video"><i class="fa fa-search"></i></button>
  </div>
 
 <!--検索結果-->
  <table v-show="results">
    <tbody>
      <tr>
        <td colspan="2">
          <button v-on:click="prevList" class="prev" v-bind:disabled="activatePrev">prev</button>
          <button v-on:click="nextList" class="next" v-bind:disabled="activateNext">next</button>
        </td>
      </tr>
      <tr v-for="(movie) in yitems" v-bind:key="movie.id.videoId">
        <td>
          <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId " target="_blank">
            <img v-bind:src="movie.snippet.thumbnails.medium.url">
          </a>
        </td>
          <td>
            <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId " target="_blank">
              <p class="video-title" >{{ movie.snippet.title }}</p>
              <p>{{ movie.snippet.description}}</p>
            </a>
          </td>
      </tr>
    </tbody>
  </table>




</template>

<script>
import axios from 'axios'; //非同期通信モジュール

export default {
  name: "SearchVideo",
  data: function() {
    return {
      results: null,
      yitems: [],
      keyword: "",
      order: "viewCount", //再生回数順で表示
      params: {
        q: "", 
        part: "snippet",
        type: "video",
        maxResults: "100",
        key: "AIzaSyBkqijmigGaqcjCs9erH__rr0wCThFVf-8"
      },
      perPage: 4,
      currentPage: 0 //デフォルト0の時は検索結果テーブルを表示しない
    };
  },
  methods: {
    search_video: function() {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params
        })
        .then(function(res) {
          self.results = res.data.items;
          self.currentPage ++; //結果を取得したらcurrentPageの値を1にする
        })
    },
    nextList() {
      this.currentPage = this.currentPage + 1;  
    },
    prevList() {
      this.currentPage = this.currentPage - 1;   
    },
  },
  computed:{ //ページ数に合わせてボタンをdisabledにする処理
    activatePrev() {
      if (this.currentPage <= 1) {
        return true;
      } else {
        return false;
      }
    },
    activateNext(){
      if (this.currentPage >= (this.params.maxResults/this.perPage)) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch:{
    currentPage(){  //currentPageの変化で、検索結果アイテムの表示を変える
        var cur = this.currentPage * this.perPage;
        var str = cur - this.perPage;
        this.yitems = this.results.slice(str,cur);  
    }

  }
};
</script>
