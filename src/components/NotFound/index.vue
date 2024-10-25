<template>
  <div class="not-found__container" style="overflow: hidden">
    <v-row dense class="notfound-wrapper__content" style="height: 100vh">
      <v-col cols="6" class="pr-0 notfound-wrapper__content">
        <div class=" d-flex align-end justify-center flex-column" style="height: 100%">
          <div>
            <h1 style="color: #ff8417; font-size: 100px">404</h1>
            <h1 class="mb-2">Page not found</h1>
            <p style="font-weight: 500">Unfortunately, the page you are looking for does not exist.</p>
            <div class="mt-4">
              <v-btn to="/" color="#ff8417" style="text-transform: capitalize" dark flat class="mr-4">go to homepage</v-btn>
              <v-btn color="#ff8417" style="text-transform: capitalize" variant="text">report error</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" class="pl-10 notfound-wrapper__content d-flex align-start justify-center flex-column">
        <Vue3Lottie
          class="ml-10 pl-10"
          animation-link="https://lottie.host/3d5df185-4581-4153-9264-5ab628795c3a/IN1g2iKQnk.json"
          :height="400"
          :width="400"
        />
      </v-col>
    </v-row>
    <v-row dense class="notfound-wrapper__content-mobile pa-6 d-flex align-center justify-center flex-column" style="height: 100vh; margin-top: -40px">
      <v-col cols="12" class="pr-0">
        <div class=" d-flex align-center justify-center flex-column" style="height: 100%">
          <div>
            <h1 style="color: #ff8417; font-size: 100px">404</h1>
            <h1 class="mb-2">Page not found</h1>
            <p style="font-weight: 500">Unfortunately, the page you are looking for does not exist.</p>
            <div class="mt-4">
              <v-btn to="/" color="#ff8417" style="text-transform: capitalize" dark flat class="mr-4">go to homepage</v-btn>
              <v-btn color="#ff8417" style="text-transform: capitalize" variant="text">report error</v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'notfoundContainer'
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>