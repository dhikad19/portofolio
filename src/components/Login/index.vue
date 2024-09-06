<template>
  <div class="login-container">
    <v-row dense>
      <v-col cols="6">
        <div class="login-bg">
          <v-carousel
            height="400"
            show-arrows="hover"
            cycle
            hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="d-flex align-center" style="margin-top: 17px">
          <v-img
            height="32"
            max-width="32"
            contain
            src="/images/logo.png"
            class="ml-4 mr-4"></v-img>
          <p class="title-content">Foxi Dashboard</p>
        </div>
        <div class="form-container">
          <v-form fast-fail @submit.prevent>
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="firstName"
                  label="Email"
                  :rules="firstNameRules"
                  variant="outlined"
                  density="compact"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="lastName"
                  label="Password"
                  :rules="lastNameRules"
                  variant="outlined"
                  density="compact"></v-text-field>
              </v-col>
              <v-col cols="12"> </v-col>
            </v-row>
            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
        </div>
        <!-- <div class="container">
          <img src="/assets/login-bg.png" alt="Full Height Image" />
        </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "loginComponent",
    data() {
      return {
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
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
