<template>

 <div class="search">
  <input size="30" v-model="keyword" placeholder="検索キーワードを入力">
  <button v-on:click="search_video"><i class="fa fa-search"></i></button>
 </div>
 
  <table v-show="results">
    <tbody>
      <tr>
        <td colspan="2">
          <button v-on:click="prevList" class="prev">prev</button>
          <button v-on:click="nextList" class="next">next</button>
        </td>
      </tr>
      <tr v-for="(movie) in yitems" v-bind:key="movie.id.videoId">
        <td>
          <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId " target="_blank">
            <img v-bind:src="movie.snippet.thumbnails.medium.url">
          </a>
        </td>
        <td>
          <p class="video-title">{{ movie.snippet.title }}</p>
          <p>{{ movie.snippet.description}}</p>
        </td>
      </tr>
    </tbody>
  </table>




</template>

<script>
import axios from 'axios';

export default {
  name: "SearchVideo",
  data: function() {
    return {
      results: null,
      yitems: [],
      keyword: "",
      order: "viewCount", // リソースを再生回数の多い順に並べます。
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet",
        type: "video",
        maxResults: "100", // 最大検索数
        key: "AIzaSyBkqijmigGaqcjCs9erH__rr0wCThFVf-8"
      },
      parPage: 4,
      currentPage: 1
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
          let current = self.currentPage * self.parPage;
          let start = current - self.parPage;
          self.results = res.data.items;
          console.log(self.results);
          self.yitems = self.results.slice(start, current);
        })
    },
    nextList() {
      this.currentPage = this.currentPage + 1;  
    },
    prevList() {
      this.currentPage = this.currentPage - 1;   
    },
  },
  watch:{
    currentPage(){
        var cur = this.currentPage * this.parPage;
        var str = cur - this.parPage;
        this.yitems = this.results.slice(str,cur);  
    }

  }
};
</script>
