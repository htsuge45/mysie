<template>
  <!-- menu page -->
  <div class="menu-wrap">
    <a class="title" href="./">Exercise record</a>
    <nav class="list">
      <ul>
        <li>
          <router-link to="/formlist">Form</router-link>
        </li>
        <li>
          <router-link to="/summary">Calendar</router-link>
        </li>
        <li>
          <router-link to="/youtube">Search</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
div.menu-wrap {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 3rem;
  align-items: center;
  z-index: 9999;
  background-color: rgb(255, 153, 255);
}

  div.menu-wrap a.title {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    text-decoration: none;
    padding: 3rem;
    white-space: nowrap;
  }

    div.menu-wrap a.title:hover,
    div.menu-wrap a.title:focus {
      color: rgb(62, 0, 125);
      text-decoration: underline;
      outline: none;
    }

  div.menu-wrap nav.list {
    margin-left: auto;
    margin-right: 5rem;
  }

    div.menu-wrap nav.list ul {
      list-style: none;
      margin: 0;
      padding: 0;
      white-space: nowrap;
    }

      div.menu-wrap nav.list > ul > li {
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
      }

        div.menu-wrap nav.list > ul > li:first-of-type {
          padding-left: 2rem;
        }

        div.menu-wrap nav.list > ul > li > a {
          font-size: 1.25rem;
          text-decoration: none;
          color: rgb(255, 255, 255);
        }

          div.menu-wrap nav.list > ul > li > a:hover,
          div.menu-wrap nav.list > ul > li > a:focus {
            color: rgb(62, 0, 125);
            text-decoration: underline;
            outline: none;
          }
</style>
