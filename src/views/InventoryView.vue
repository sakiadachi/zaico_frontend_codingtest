<template>
  <div class="inventories-page">
    <div class="inventories-page__add-btn">
      <div>
        <router-link to="/add">➕新規登録</router-link>
      </div>
    </div>
    <div>
      <p v-if="isLoading" class="inventories-page__loading">処理中...</p>
      <InventoryTable v-else :inventories="inventories" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryTable from '@/components/templates/inventory/InventoryTable.vue'
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

  &__loading {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
  }
}
</style>
