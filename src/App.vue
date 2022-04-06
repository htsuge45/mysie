<template>

  <div class="menu-wrap">
      <a class="title" href="./">Exercise record</a>
      <nav class="list">
        <ul>
          <li><router-link to="/mysite">List</router-link></li>
          <li><router-link to="/summary">summary</router-link></li>
          <li><router-link to="/youtube">Youtube</router-link></li>
        </ul>
      </nav>

  </div>
      <router-view/>
</template>

<script>

export default {
  name: 'App',

}

</script>
