<template>
  <div class="signup-container">
    <v-row dense>
      <v-col cols="6">
        <div class="signup-bg d-flex align-center justify-center">
          <v-carousel
            cycle
            height="520"
            show-arrows="hover"
            hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in items" :key="i">
              <v-img :src="slide.img" contain height="300px"> </v-img>
              <v-card
                class="pt-4 d-flex align-center justify-center flex-column"
                flat
                color="transparent">
                <p class="mb-2 mt-10 signup-title">{{ slide.title }}</p>
                <p class="mt-1 signup-desc">{{ slide.description }}</p>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col cols="6">
        <div
          class="d-flex align-center flex-column justify-space-between"
          style="width: 100%; height: 100%">
          <div></div>
          <div class="form-login__container">
            <div class="d-flex align-center justify-center">
              <v-img
                height="80"
                max-width="80"
                contain
                src="/images/logo.png"
                class="ml-4 mr-4">
              </v-img>
            </div>
            <div
              class="mt-6 mb-8 d-flex align-center justify-center flex-column">
              <p class="title-form">Get Started!</p>
              <p class="mt-2 desc-form">
                Create your account now.
              </p>
            </div>
            <div class="form-container">
              <v-form fast-fail @submit.prevent>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      :rules="emailRules"
                      append-inner-icon="mdi-at"
                      variant="outlined"
                      density="compact"></v-text-field>
                  </v-col>
                </v-row>
                <v-btn
                  @click="handleGoogleLogin()"
                  color="#FF8417"
                  height="40"
                  class="mt-2"
                  style="
                    color: white;
                    text-transform: capitalize;
                    letter-spacing: normal;
                  "
                  flat
                  type="submit"
                  block
                  >Next</v-btn
                >
                <p class="text-divider mt-4">or</p>
                <v-btn
                  variant="outlined"
                  class="mt-4"
                  style="letter-spacing: normal"
                  block>
                  <template v-slot:default>
                    <img
                      src="images/icon/google.png"
                      alt="Button Image"
                      contain
                      height="20"
                      max-width="20"
                      class="button-image mr-3" />
                    <span
                      style="
                        text-transform: capitalize;
                        font-weight: 500;
                        color: #4f4f4fe5;
                      "
                      >Sign up with google</span
                    >
                    <!-- Optional text next to the image -->
                  </template>
                </v-btn>
              </v-form>
            </div>
          </div>
          <div>
            <p class="mb-8" style="color: #4f4f4fe5; font-size: 16px">
              Already have an account?
              <b style="color: #ff8417; cursor: pointer" @click="toSignIn()">Sign In</b>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { googleTokenLogin } from "vue3-google-login";
  export default {
    name: "SignUpComponent",
    data() {
      return {
        checkbox: false,
        show: false,
        items: [
          {
            img: "/images/banner/banner-1.png",
            title: "Streamline Project Workflow",
            description:
              "Visualize project progress and manage tasks efficiently with intuitive tools.",
          },
          {
            img: "/images/banner/banner-2.png",
            title: "Unlock Insights with Real-Time Data",
            description:
              "Monitor metrics with live updates and detailed analytics to make informed decisions.",
          },
        ],
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4",
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
        email: "",
        password: "",
        emailRules: [
          v => !!v || 'Email is required',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Must be at least 8 characters long',
        ],
      };
    },
    methods: {
      toSignIn() {
        this.$router.push({ path: '/signin' })
      },
      handleRemember() {
        this.checkbox = !this.checkbox
      },
      handleGoogleLogin() {
        googleTokenLogin().then((response) => {
          console.log("Handle the response", response);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
