<template>
  <div class="container">
    <button @click="set()">保存</button>
  </div>
</template>

<script>
export default {
  methods: {
    set() {
      localStorage.setItem('name', '田中')
    }
  }
}
</script>