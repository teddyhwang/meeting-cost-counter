<template>
  <div id="counter">
    <p><span class="label">Cost:</span><span class="value">${{ currentCost }}</span></p>
    <p><span class="label">Time:</span><span class="value">{{ currentTimeInSeconds }} seconds</span></p>

    <div class="counter-buttons">
      <el-button type="success" :disabled="timerOn || salary == 0" v-on:click="start">Start</el-button>
      <el-button type="warning" :disabled="!timerOn" v-on:click="pause">Pause</el-button>
      <el-button type="danger" :disabled="currentCost == 0 && currenTime == 0" v-on:click="resetTimer">Reset</el-button>
    </div>
  </div>
</template>

<script>
  const WORK_HOURS_PER_YEAR = 2080;
  const WORK_SECONDS_PER_YEAR = WORK_HOURS_PER_YEAR * 60;
  const WORK_MILLISECONDS_PER_YEAR = WORK_SECONDS_PER_YEAR * 1000;
  const INTERVAL_TIME = 50;

  export default {
    props: {
      salary: {
        type: Number
      }
    },
    data() {
      return {
        currentCost: 0,
        currentTime: 0, // milliseconds
        timerOn: false
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
        if (this.timerOn) {
          return false;
        }
        this.counter = setInterval(() => {
          this.timerOn = true;
          this.currentTime = this.currentTime + INTERVAL_TIME;
          this.currentCost = (this.currentTime * this.costPerMillisecond).toFixed(2);
        }, INTERVAL_TIME);
      },
      pause() {
        this.timerOn = false;
        clearInterval(this.counter);
      },
      resetTimer() {
        this.pause();
        this.currentCost = 0;
        this.currentTime = 0;
      }
    }
  };
</script>

<style lang="sass">
  #counter {
    width: 100%;
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 50%;
    margin-left: -50%;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 100%);
    padding: 50px 10px 20px 10px;

    p {
      text-align: center;
      margin: 0 auto;
      clear: both;
      max-width: 600px;
    }

    .label {
      color: #1abc9c;
      font-size: 2em;
      font-family: 'Roboto Condensed', serif;
      font-weight: 400;
      float: left;
      margin-top: 7px;
    }

    .value {
      color: #333;
      font-size: 2.5em;
      font-weight: 100;
      font-family: 'Roboto', serif;
      float: right;
    }

    .counter-buttons {
      clear: both;
      padding-top: 20px;
    }
  }
</style>
