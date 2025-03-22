<template>
  <div class="inventories-page">
    <div class="inventories-page__add-btn">
      <div>
        <router-link to="/add">➕新規登録</router-link>
      </div>
    </div>
    <div>
      <p v-if="isLoading" class="inventories-page__loading">処理中...</p>
      <InventoryTable v-else :inventories="state" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryTable from '@/components/templates/inventory/InventoryTable.vue'
import { useAsyncState } from '@/utils/useAsyncState'
import { getInventories, type InventoryItem } from '@/utils/api'

const { state, isLoading } = useAsyncState<InventoryItem[]>(getInventories())
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

  &__loading {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
  }
}
</style>
