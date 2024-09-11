<template>
  <div class="greetings-container">
    <transition name="lift-up" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <p v-if="shouldAnimate" :key="currentText" class="text">
        {{ currentText }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GreetingComponents',
  data() {
    return {
      texts: [],
      currentIndex: 0,
      shouldAnimate: true,
    }
  },
  computed: {
    currentText() {
      return this.texts[this.currentIndex];
    },
  },
  beforeUnmount() {
    window.removeEventListener('visibilitychange', this.startTextChange());
  },
  mounted() {
    this.checkTimes()
    window.addEventListener('visibilitychange', this.startTextChange());
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
    startTextChange() {
      if (document.visibilityState === 'visible') {
        setTimeout(() => {
          this.shouldAnimate = false;
          setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;
            this.shouldAnimate = true;
          }, 0);
          }, 7000);
        }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.filter = 'blur(10px)';
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = 'opacity 1s ease, filter 1s ease, transform 1s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.filter = 'blur(0px)';
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 1s ease, filter 1s ease, transform 1s ease';
      el.style.opacity = 0;
      el.style.transform = 'translateY(-20px)';
      el.style.filter = 'blur(10px)';
      done();
    },
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>