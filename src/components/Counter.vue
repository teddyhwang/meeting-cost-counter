<template>
  <div id="counter">
    <p><span class="label">Time:</span> <span class="value">{{ currentTimeInSeconds }} seconds</span></p>
    <p><span class="label">Cost:</span> <span class="value">${{ currentCost }}</span></p>

    <button v-on:click="start">Start</button>
    <button v-on:click="pause">Pause</button>
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<script>
  const WORK_HOURS_PER_YEAR = 2080;
  const WORK_SECONDS_PER_YEAR = WORK_HOURS_PER_YEAR * 60;
  const WORK_MILLISECONDS_PER_YEAR = WORK_SECONDS_PER_YEAR * 1000;

  export default {
    props: {
      salary: {
        type: Number
      }
    },
    data() {
      return {
        currentCost: 0,
        currentTime: 0 // milliseconds
      };
    },
    computed: {
      costPerMillisecond() {
        return this.salary / WORK_MILLISECONDS_PER_YEAR;
      },
      currentTimeInSeconds() {
        return Math.floor(this.currentTime / 1000);
      }
    },
    methods: {
      start() {
        this.counter = setInterval(() => {
          this.currentTime = this.currentTime + 10;
          this.currentCost = (this.currentTime * this.costPerMillisecond).toFixed(2);
        }, 10);
      },
      pause() {
        clearInterval(this.counter );
      },
      reset() {
        this.currentCost = 0;
        this.currentTime = 0;
      }
    }
  };
</script>

<style lang="sass">
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

  #counter {
    max-width: 600px;
    margin: 0 auto;

    p {
      text-align: center;
      margin: 0;
    }

    .label {
      color: #1abc9c;
      font-size: 2em;
      font-family: 'Roboto Condensed', serif;
      font-weight: 400;
    }

    .value {
      color: #333;
      font-size: 2.5em;
      font-weight: 100;
      font-family: 'Roboto', serif;
    }
  }
</style>
