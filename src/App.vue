<script>
import HelloWorld from './components/HelloWorld.vue'
import { store } from './store.js';

export default {
  name: "App",
  components: {

  },
  data() {
    return {
      store,
    }
  },
  mounted() {

  },
  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@use 'style/main.scss' as *;
</style>
