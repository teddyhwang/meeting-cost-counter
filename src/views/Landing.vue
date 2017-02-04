<template>
  <div id="landing">
    <counter :salary="500000"></counter>
  </div>
</template>

<script>
  import Counter from '../components/Counter.vue';

  export default {
    components: {
      Counter
    }
  };
</script>

<style lang="sass">
</style>
