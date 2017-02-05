<template>
  <div id="app">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    }
  };
</script>

<style lang="sass">
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Condensed', serif;
  }
</style>
