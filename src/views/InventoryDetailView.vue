<template>
  <template v-if="isLoading">
    <!-- TODO: ローディングコンポーネント -->
    <div class="loading">データを読み込み中...</div>
  </template>

  <template v-else-if="inventory">
    <InventoryDetail :inventory />
  </template>

  <GoBackToInventoryLink class="inventory-detail__go-back" />
</template>

<script setup lang="ts">
import GoBackToInventoryLink from '@/components/layouts/GoBackToInventoryLink.vue'
import InventoryDetail from '@/components/templates/InventoryDetail.vue'
import { getInventoryDetail } from '@/utils/api'
import useAsyncState from '@/utils/useAsyncState'
import { useRoute } from 'vue-router'

const route = useRoute()

const {
  state: inventory,
  isLoading,
  request,
} = useAsyncState(() => getInventoryDetail(route.params.id.toString()))

request()
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  color: var(--color-text);
}
</style>
