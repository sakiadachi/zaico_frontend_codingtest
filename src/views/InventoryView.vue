<template>
  <main>
    <template v-if="isLoading">
      <div class="loading">データを読み込み中...</div>
    </template>

    <template v-else>
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
            <td><img :src="inventory.item_image.url" alt="" /></td>
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
  </main>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

interface InventoryItem {
  id: number
  title: string
  quantity: number
  unit: string
  category: string
  item_image: {
    url: string
  }
}

const inventories = ref<InventoryItem[]>([])
const isLoading = ref(true)

const getInventory = async () => {
  isLoading.value = true
  try {
    const response = await axios.get('https://web.zaico.co.jp/api/v1/inventories', {
      headers: {
        Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
      },
    })
    inventories.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getInventory()
})
</script>

<style scoped lang="scss">
.inventory-table {
  max-width: 1000px;
  margin: 40px auto;

  thead {
    tr {
      border-bottom: 1px solid var(--color-border);
    }
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

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  color: var(--color-text);
}
</style>
