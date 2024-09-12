<!-- TextBlurFadeAnimation.vue -->
<template>
  <div class="calendar-container">
    <VCalendar :masks="{ weekdays: 'WWW' }" :attributes="attr" attr view="weekly" title-position="center" expanded transparent borderless/>
    <div class="reminder-container">
      <div class="reminder-top d-flex align-center justify-space-between">
        <p class="reminder-title mb-0">Reminder</p>
        <v-icon color="grey">mdi-bell-outline</v-icon>
      </div>
      <div class="reminder-content">
        <div class="reminder-list d-flex align-start justify-space-between" v-for="(item, i) in attr" :key="i">
          <div class="d-flex">
            <v-btn :color="item.msgColor">
              <v-icon>{{item.msgIcon}}</v-icon>
            </v-btn>
            <div class="d-flex flex-column">
              <p class="content-msg">{{item.msg}}</p>
              <p class="content-date">{{formatDate(item.dates)}}</p>
            </div>
          </div>
          <v-switch
              v-model="item.msgStatus"
              color="orange-darken-3"
              hide-details
            ></v-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
export default {
  name: 'CalendarComponents',
  data() {
    return {
      attr: [
        {
          dot: true, 
          dates: new Date(year, month, 12),
          msgIcon: 'mdi-heart',
          msgColor: 'green',
          msg: 'Mom and dad anniversary',
          msgStatus: false
        },
        {
          dot: true, 
          dates: new Date(year, month, 13),
          msgIcon: 'mdi-camera',
          msgColor: 'blue',
          msg: 'Meeting with Tami',
          msgStatus: true
        },
        {
          dot: true, 
          dates: new Date(year, month, 14),
          msgIcon: 'mdi-party-popper',
          msgColor: 'yellow',
          msg: 'Mia birthday party',
          msgStatus: true
        }
      ]
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
  }
};
</script>

<style>
.vc-header .vc-title {
  color: #4f4f4fe5;
}
.vc-container .vc-weekday-1, .vc-container .vc-weekday-7 {
  color: #ff8417;
}
</style>

<style lang="scss" scoped>
@import './style.scss'
</style>
