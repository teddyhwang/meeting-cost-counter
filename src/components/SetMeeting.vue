<template>
  <div id="set-meeting">
    <div class="add">
      <div class="attendee-buttons">
        Add: <el-button v-for="(value, key) in salaries" type="success" @click="addAttendee(key)">{{ key }}</el-button>
      </div>
      <p>Time is money. This meeting will cost <strong>${{ costPerHour }}/hour</strong></p>
      <el-button type="danger" v-on:click="resetAttendees">Reset</el-button>
    </div>
    <ol>
      <li v-for="(attendee, index) in attendees">
        <span>{{ attendee }}</span>
        <el-button :plain="true" type="danger" icon="delete" @click="removeAttendee(index, attendee)"></el-button>
      </li>
    </ol>
    <counter :salary="cost"></counter>
  </div>
</template>

<script>
  import Counter from './Counter.vue';

  export default {
    data() {
      return {
        salaries: {
          developer: 100000,
          product: 100000,
          teamlead: 120000,
          director: 150000,
          vp: 200000
        },
        attendees: [],
        cost: 0
      };
    },
    methods: {
      addAttendee(role) {
        this.attendees.push(role);
        this.cost = this.cost + this.salaries[role];
      },
      removeAttendee(index, role) {
        this.attendees.splice(index, 1);
        this.cost = this.cost - this.salaries[role];
      },
      resetAttendees() {
        this.attendees = [];
        this.cost = 0;
      }
    },
    computed: {
      costPerHour() {
        return Math.floor(this.cost / 2080);
      }
    },
    components: {
      Counter
    }
  };
</script>

<style lang="scss">
  #set-meeting {
    max-width: 600px;
    margin: 0 auto;
    padding: 140px 0 180px;
    text-align: center;

    .add {
      background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 75%,rgba(255,255,255,0) 100%);
      position: fixed;
      top: 0;
      width: 100%;
      left: 50%;
      margin-left: -50%;
      padding: 10px 0 40px;
    }

    .attendee-buttons {
      button {
        text-transform: capitalize;
        padding: 5px;
        margin: 0 5px 0 0;
      }
    }

    ol {
      margin: 0 5px 0 0;
      padding: 0 0 0 25px;

      li {
        text-transform: capitalize;
        clear: both;
        line-height: 2em;
        border-bottom: solid 1px rgba(0,0,0,0.3);
        text-align: left;

        button {
          float: right;
          padding: 5px;
          margin-top: 3px;
        }
      }
    }
  }
</style>
