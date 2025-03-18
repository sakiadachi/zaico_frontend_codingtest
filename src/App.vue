<template>
  <LayoutHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/layouts/LayoutHeader.vue'
</script>

<style scoped></style>
