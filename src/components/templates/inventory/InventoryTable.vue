<template>
  <table class="inventory-table">
    <thead>
      <tr>
        <th class="inventory-table__img">写真</th>
        <th class="inventory-table__title">商品名</th>
        <th>在庫数</th>
        <th>カテゴリ</th>
        <th class="inventory-table__more"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="inventory in inventories" :key="inventory.id">
        <td><img v-if="inventory.item_image.url" :src="inventory.item_image.url" alt="" /></td>
        <td>{{ inventory.title }}</td>
        <td>{{ inventory.quantity }} {{ inventory.unit }}</td>
        <td>{{ inventory.category }}</td>
        <td>
          <router-link :to="`/inventory/${inventory.id}`">詳細</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import type { InventoryItem } from '@/utils/api'

defineProps<{
  inventories?: InventoryItem[]
}>()
</script>

<style scoped lang="scss">
.inventory-table {
  width: 100%;
  border: 1px solid var(--color-border);

  thead {
    tr {
      border-bottom: 1px solid var(--color-border);
    }
  }
  th,
  td {
    padding: 0.25rem;
    border-bottom: 1px solid var(--color-border);
  }

  &__img {
    width: 100px;
  }

  &__title {
    width: 50%;
  }
  &__more {
    width: 60px;
  }
}
</style>
