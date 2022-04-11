<template>
  <div class="body-content">
    <!--カレンダー表示ビュー-->
    <ItemCalendar v-bind:Items="Items"></ItemCalendar>
  </div>
</template>

<script>
import ItemCalendar from '../components/ItemCalendar.vue'

export default {

  name: 'SummaryCalender',
  components: {
    ItemCalendar,
  },
  data() {
    return {
      Items: [],
    }
  },
  mounted() { //Itemの読み取り
    if (localStorage.getItem('Items')) {
      try {
        this.Items = JSON.parse(localStorage.getItem('Items'))
      } catch (e) {
        localStorage.removeItem('Items')
      }
    }
  }
}
</script>

<style>
div.calendar-wrap {
  position: relative;
  padding: 10px 0;
  min-height: calc(100vh - 5rem);
}

  div.calendar-wrap div.row {
    display: flex;
  }

  div.calendar-wrap div.month {
    font-size: 2rem;
  }

  div.calendar-wrap div.prev-next {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

    div.calendar-wrap div.prev-next button {
      margin: 0 10px;
    }

  div.calendar-wrap div.calendar div.row {
    border-right: 1px solid rgb(171, 88, 255);
    border-left: 1px solid rgb(171, 88, 255);
    border-top: 1px solid rgb(171, 88, 255);
  }

    div.calendar-wrap div.calendar div.row:last-of-type {
      border-bottom: 1px solid rgb(171, 88, 255);
    }

  div.calendar-wrap div.calendar div.calendar-youbi {
    font-size: 1.2rem;
    font-weight: bold;
    width: calc(100% / 7);
    text-align: center;
    border-right: 1px solid rgb(171, 88, 255);
    background-color: rgba(247, 186, 233, 0.7);
  }

    div.calendar-wrap div.calendar div.calendar-youbi:last-of-type {
      border-right: none;
    }

    div.calendar-wrap div.calendar div.calendar-youbi:first-of-type {
      color: rgb(255, 0, 0);
    }

    div.calendar-wrap div.calendar div.calendar-youbi:last-of-type {
      color: rgb(70, 177, 255);
    }

  div.calendar-wrap div.calendar div.calendar-daily {
    width: calc(100% / 7);
    min-height: calc((100vh - 10rem) / 6);
    border-right: 1px solid rgb(171, 88, 255);
    padding-left: 0.25rem;
    background-color: rgba(255, 255, 255, 0.7);
  }

    div.calendar-wrap div.calendar div.calendar-daily:last-of-type {
      border-right: none;
    }
    
    div.calendar-wrap div.calendar div.calendar-daily.outside{
      background-color: rgba(191, 191, 191, 0.7);
      color: rgb(122 122 122);
    }
</style>