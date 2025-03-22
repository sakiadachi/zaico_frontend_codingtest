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
import { useAsyncState } from '@/utils/useAsyncState'
import { getInventoryDetail } from '@/utils/api'
import { useRoute } from 'vue-router'

const route = useRoute()

const { state: inventory, isLoading } = useAsyncState(
  getInventoryDetail(route.params.id.toString()),
)
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
