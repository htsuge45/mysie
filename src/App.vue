<template>

  <div class="menu-wrap">
      <a class="title" href="./">Exercise record</a>
      <nav class="list">
        <ul>
          <li><router-link to="/formlist">Form</router-link></li>
          <li><router-link to="/summary">Calendar</router-link></li>
          <li><router-link to="/youtube">Search</router-link></li>
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
