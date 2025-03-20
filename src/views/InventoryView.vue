<template>
  <div class="inventories-page">
    <div class="inventories-page__add-btn">
      <div>
        <router-link to="/add">➕新規登録</router-link>
      </div>
    </div>
    <div>
      <template v-if="isLoading">
        <div class="loading">データを読み込み中...</div>
      </template>

      <InventoryTable v-else :inventories />
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryTable from '@/components/InventoryTable.vue'
import { useInventoryView } from '@/composables/useInventoryView'

const { inventories, isLoading } = useInventoryView()
</script>

<style scoped lang="scss">
.inventories-page {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  & > * {
    padding: 2rem 0 0;
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
  }

  &__add-btn {
    display: flex;
    justify-content: end;
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  color: var(--color-text);
}
</style>
