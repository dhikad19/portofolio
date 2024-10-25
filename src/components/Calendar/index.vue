<!-- TextBlurFadeAnimation.vue -->
<template>
  <div class="calendar-container">
    <v-menu
        v-model="menu"
        offset-y
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary">
            Open Date Picker
          </v-btn>
        </template>

        <v-card>
          <v-date-picker color="#ff8417" v-model="selectedDate" @input="menu = false"></v-date-picker>
          <v-card-actions>
            <v-btn text @click="menu = false">Cancel</v-btn>
            <v-btn text @click="confirmDate">Confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
  </div>
</template>

<script>
export default {
  name: 'CalendarComponents',
  data() {
    return {
      menu: false,
      selectedDate: null
    }
  },
  methods: {
    confirmDate() {
      this.menu = false
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>
