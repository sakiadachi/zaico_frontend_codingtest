<template>
  <header>
    <h1>在庫管理</h1>
    <nav>
      <RouterLink to="/">一覧</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
header {
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid var(--color-border);

  h1 {
    font-size: 1.6rem;
  }
}

nav {
  font-size: 1rem;
  text-align: center;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a:first-of-type {
    border: 0;
  }
}
</style>
