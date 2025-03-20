<template>
  <div class="inventory-detail">
    <div class="inventory-detail__image">
      <img v-if="props.inventory.item_image.url" :src="props.inventory.item_image.url" alt="" />
    </div>

    <div class="inventory-detail__info">
      <dl>
        <dt>商品ID</dt>
        <dd>{{ props.inventory.id }}</dd>

        <dt>商品名</dt>
        <dd>{{ props.inventory.title }}</dd>

        <dt>在庫数</dt>
        <dd>{{ props.inventory.quantity }} {{ props.inventory.unit }}</dd>

        <dt>カテゴリ</dt>
        <dd>{{ props.inventory.category }}</dd>

        <dt>保管場所</dt>
        <dd>{{ props.inventory.place }}</dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryItem } from '@/stores/inventory'

const props = defineProps<{
  inventory: InventoryItem
}>()
</script>

<style scoped lang="scss">
.inventory-detail {
  max-width: 1000px;
  margin: 24px auto;
  padding: 0 16px;
  display: flex;
  gap: 24px;

  &__image {
    max-width: 200px;

    img {
      width: 100%;
      border-radius: 8px;
      border: 1px solid var(--color-border);
    }
  }

  &__info {
    dl {
      display: grid;
      grid-template-columns: 120px 1fr;
      row-gap: 16px;
      column-gap: 24px;
    }

    dt {
      font-weight: 600;
      color: #666;
    }

    dd {
      margin: 0;
    }
  }

  &__go-back {
    margin-top: 10rem;
  }
}
</style>
