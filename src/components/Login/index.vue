<template>
  <div class="login-container">
    <v-row dense>
      <v-col cols="6">
        <div class="login-bg d-flex align-center justify-center">
          <v-carousel
            cycle
            height="520"
            :show-arrows="false"
            hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in items" :key="i">
              <v-img :src="slide.img" contain
              height="300px">
              </v-img>
              <v-card class="pt-4 d-flex align-center justify-center flex-column" flat color="transparent">
                <p class="mb-2 mt-10 login-title">{{ slide.title }}</p>
                <p class="mt-1 login-desc">{{ slide.description }}</p>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="d-flex align-center flex-column justify-space-between" style="width: 100%; height: 100%">
          <div></div>
          <div class="form-login__container">
            <div class="d-flex align-center justify-center">
              <v-img
                height="80"
                max-width="80"
                contain
                src="/images/logo.png"
                class="ml-4 mr-4"
              >
              </v-img>
            </div>
            <div class="mt-6 mb-8 d-flex align-center justify-center flex-column">
              <p class="title-form">
                Hello Again!
              </p>
              <p class="mt-2 desc-form">
                Please log in to access Foxi Dashboard. 
                Here you can manage settings, view data 
                and utilize various tools.
              </p>
            </div>
            <div class="form-container">
              <v-form fast-fail @submit.prevent>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      v-model="firstName"
                      label="Email"
                      :rules="firstNameRules"
                      append-inner-icon="mdi-at"
                      variant="outlined"
                      density="compact"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="lastName"
                      label="Password"
                      :rules="lastNameRules"
                      @click:append-innner="show = !show"
                      :type="show ? 'text' : 'password'"
                      variant="outlined"
                      density="compact">
                      <template v-slot:append-inner>
                        <v-icon 
                          class="password-toggle-icon" 
                          @click="show = !show"
                        >
                          {{ show ? 'mdi-eye-off' : 'mdi-eye' }}
                        </v-icon>
                      </template>
                      </v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex align-center justify-space-between mb-4">
                    <div class="d-flex align-center">
                      <v-icon style="margin-left: -3px" class="mr-2" color="#4f4f4fa9">mdi-checkbox-blank-outline</v-icon>
                      <p style="color: #4f4f4fa9; font-size: 15px">Remember Me</p>
                    </div>
                    <div>
                      <p style="color: #ff8417; font-size: 15px; font-weight: 500">Forgot Password</p>
                    </div>
                  </v-col>
                </v-row>
                <v-btn @click="handleGoogleLogin()" color="#FF8417" height="40" class="mt-2" style="color: white; text-transform: capitalize" flat type="submit" block>Login</v-btn>

              </v-form>
            </div>
          </div>
          <div>
            <p class="mb-8" style="color: #4f4f4fa9; font-size: 16px">
              Don't have an account yet? 
              <b style="color: #ff8417">Sign Up</b>
            </p>
          </div>
        </div>
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { googleTokenLogin } from "vue3-google-login"
  export default {
    name: "loginComponent",
    data() {
      return {
        show: false,
        items: [
          {
            img: '/images/banner/banner-1.png',
            title: 'Streamline Project Workflow',
            description: 'Visualize project progress and manage tasks efficiently with intuitive tools.'
          },
          {
            img: '/images/banner/banner-2.png',
            title: 'Unlock Insights with Real-Time Data',
            description: 'Monitor metrics with live updates and detailed analytics to make informed decisions.'
          }
        ],
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4",
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
        firstName: "",
        firstNameRules: [
          (value) => {
            if (value?.length >= 3) return true;

            return "First name must be at least 3 characters.";
          },
        ],
        lastName: "",
        lastNameRules: [
          (value) => {
            if (/[^0-9]/.test(value)) return true;

            return "Last name can not contain digits.";
          },
        ],
      };
    },
    methods: {
      handleGoogleLogin() {
        googleTokenLogin().then((response) => {
          console.log("Handle the response", response)
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
