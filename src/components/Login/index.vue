<template>
  <div class="login-container">
    <v-row dense>
      <v-col cols="7">
        <div class="d-flex align-center" style="margin-top: 17px">
          <v-img height="32" max-width="32" contain src="/images/logo.png" class="ml-4 mr-4"></v-img>
          <p class="title-content">Foxi Dashboard</p>
        </div>
        <div class="form-container">
          <v-form fast-fail @submit.prevent>
            <v-row dense>
              <v-col cols="12">
                <label for="">Email</label>
                <v-text-field
                  v-model="firstName"
                  :rules="firstNameRules"
                  variant="outlined"
                  density="comfortable"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <label for="">Password</label>
                <v-text-field
                  v-model="lastName"
                  :rules="lastNameRules"
                  variant="outlined"
                  density="comfortable"
                ></v-text-field>
              </v-col>
              <v-col cols="12">

              </v-col>
            </v-row>
            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
        </div>
      </v-col>
      <v-col cols="5">
        <div class="container">
          <img src="/assets/login-bg.png" alt="Full Height Image">
      </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'loginComponent',
    data() {
      return {
        firstName: '',
        firstNameRules: [
          value => {
            if (value?.length >= 3) return true

            return 'First name must be at least 3 characters.'
          },
        ],
        lastName: '',
        lastNameRules: [
          value => {
            if (/[^0-9]/.test(value)) return true

            return 'Last name can not contain digits.'
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>