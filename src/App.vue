<template>
  <LayoutHeader />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/layouts/LayoutHeader.vue'
</script>

<style scoped></style>
