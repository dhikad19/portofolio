<template>
  <div class="home d-flex" style="background-color: #fffbf8;">
    <NavigationBar style="max-width: 250px" />
    <div class="home-content mt-6" style="width: 100%;">
      <v-row dense>
        <v-col cols="12">
          <v-row dense>
            <v-col cols="10" class="pl-10 pr-10">
              <v-row dense>
                <v-col md="8">
                  <Greeting />
                </v-col>
                <v-col md="4">
                  <Calendar />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2">
              <Todos />
            </v-col>
          </v-row>
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
import Todos from '@/components/Todos/index.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    Calendar,
    Greeting,
    Todos
  }
}
</script>
