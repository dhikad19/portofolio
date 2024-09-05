<template>
  <div class="login-container">
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/Login/index.vue'

export default {
  name: 'HomeView',
  components: {
    LoginComponent
  }
}
</script>
