<!-- TextBlurFadeAnimation.vue -->
<template>
  <div class="calendar-container">
    <VCalendar :masks="{ weekdays: 'WWW' }" :attributes="attr" attr view="weekly" title-position="center" expanded transparent borderless/>
    <div class="reminder-container">
      <div class="reminder-top d-flex align-center justify-space-between mt-2">
        <p class="reminder-title mb-0">Reminder</p>
        <v-icon color="grey">mdi-bell-outline</v-icon>
      </div>
      <div class="reminder-content mt-2">
        <div class="reminder-list d-flex align-start justify-space-between" v-for="(item, i) in attr" :key="i">
          <div class="d-flex align-center">
            <v-card flat class="icon-card mr-4" :style="{ backgroundColor: lightenColor(item.msgColor, 0.8) }">
              <v-icon :style="{ color: item.msgColor }">{{item.msgIcon}}</v-icon>
            </v-card>
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
          msgColor: '#ec2b38',
          msg: 'Mom and dad anniversary',
          msgStatus: false
        },
        {
          dot: true, 
          dates: new Date(year, month, 13),
          msgIcon: 'mdi-camera',
          msgColor: '#FF9800',
          msg: 'Meeting with Tami',
          msgStatus: true
        },
        {
          dot: true, 
          dates: new Date(year, month, 14),
          msgIcon: 'mdi-party-popper',
          msgColor: '#795548',
          msg: 'Mia birthday party',
          msgStatus: true
        }
      ]
    }
  },
  methods: {
    lightenColor(color, percent) {
      // Ensure percent is within range
      percent = Math.min(1, Math.max(0, percent));
      
      let r = parseInt(color.slice(1, 3), 16);
      let g = parseInt(color.slice(3, 5), 16);
      let b = parseInt(color.slice(5, 7), 16);

      r = Math.min(255, Math.floor(r + (255 - r) * percent));
      g = Math.min(255, Math.floor(g + (255 - g) * percent));
      b = Math.min(255, Math.floor(b + (255 - b) * percent));

      return `#${(0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
  }
};
</script>

<style>
.icon-card {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

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
