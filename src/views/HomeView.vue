<template>
  <div class="home d-flex">
    <NavigationBar style="max-width: 280px" />
    <div class="home-content pl-6 pr-6 mt-6" style="width: 100%">
      <v-row dense>
        <v-col md="8">
          <Greeting />
        </v-col>
        <v-col md="4">
          <Calendar />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/Navigation/index.vue'
import Calendar from '@/components/Calendar/index.vue'
import Greeting from '@/components/Greetings/index.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    Calendar,
    Greeting
  }
}
</script>
