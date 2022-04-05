<template>

  <div class="container-fluid">
    <h1>運動記録</h1>
    <div id="nav">
      <router-link to="/mysite">List</router-link> |
      <router-link to="/summary">summary</router-link> |
      <router-link to="/youtube">Youtube</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}

</script>

<style>

</style>
