<!-- TextBlurFadeAnimation.vue -->
<template>
  <div class="calendar-container">
    <VCalendar :masks="{ weekdays: 'WWW' }" :attributes="attr" attr view="weekly" title-position="center" expanded transparent borderless/>
    <div class="reminder-container">
      <div class="reminder-top d-flex align-center justify-space-between">
        <p class="reminder-title mb-0">Reminder</p>
        <v-icon>mdi-bell-outline</v-icon>
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
        {dot: true, dates: new Date(year, month, 12)},
        {dot: true, dates: new Date(year, month, 13)},
        {dot: true, dates: new Date(year, month, 14)}
      ]
    }
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
