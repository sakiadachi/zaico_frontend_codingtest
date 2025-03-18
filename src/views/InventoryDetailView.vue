<template>
  <template v-if="isLoading">
    <div class="loading">データを読み込み中...</div>
  </template>

  <template v-else-if="inventory">
    <div class="inventory-detail">
      <div class="inventory-detail__image">
        <img :src="inventory.item_image.url" alt="" />
      </div>

      <div class="inventory-detail__info">
        <dl>
          <dt>商品ID</dt>
          <dd>{{ inventory.id }}</dd>

          <dt>商品名</dt>
          <dd>{{ inventory.title }}</dd>

          <dt>在庫数</dt>
          <dd>{{ inventory.quantity }} {{ inventory.unit }}</dd>

          <dt>カテゴリ</dt>
          <dd>{{ inventory.category }}</dd>

          <dt>保管場所</dt>
          <dd>{{ inventory.place }}</dd>
        </dl>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const inventoryStore = useInventoryStore()
const { inventory } = storeToRefs(inventoryStore)

const isLoading = ref(false)

const getInventoryDetail = async () => {
  isLoading.value = true
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/inventories/${route.params.id}`,
      {
        headers: {
          Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
        },
      },
    )
    inventoryStore.updateInventory(response.data)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getInventoryDetail()
})

onBeforeUnmount(() => {
  inventoryStore.$reset()
})
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
