<template>
  <div class="greetings-container">
    <p class="text">
      {{ texts[0] }}
    </p>
    <p class="text-subtitle">
      {{ texts[1] }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'GreetingComponents',
  data() {
    return {
      texts: [],
    }
  },
  computed: {
    currentText() {
      return this.texts[this.currentIndex];
    },
  },
  methods: {
    checkTimes() {
      const hours = (new Date().getHours())
      if (hours >= 1 && hours <= 10) {
        this.texts = ['Hello Dika, Good Morning!', 'Stay on top of your work!']
      } else if (hours >= 10 && hours <= 14) {
        this.texts = ['Hello Dika, Good Afternoon!', "Keep going, you're doing great!"]
      } else if (hours >= 14 && hours <= 18) {
        this.texts = ['Hello Dika, Good Evening!', 'Every day is a fresh start!']
      } else {
        this.texts = ['Hello Dika, Good Night!', 'Keep moving forward, one step at a time!']
      }
    },
  },
  mounted() {
    this.checkTimes()
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>