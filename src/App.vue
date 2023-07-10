<script>
import Header from './components/Header.vue';
import { store } from './store.js';

export default {
  name: "App",
  components: {
    Header,
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
  <Header />
  <Home />
  <router-view></router-view>
</template>

<style lang="scss">
@use 'style/main.scss' as *;
</style>
