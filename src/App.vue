<template>
  <div :class="{ dark: isDark }">
    <router-view/>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>
