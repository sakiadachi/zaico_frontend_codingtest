<template>
  <main>
    <h2>在庫追加</h2>
    <form @submit.prevent="createNewItem">
      <label for="title">タイトル: </label>
      <input id="title" v-model.trim="newTitle" type="text" name="title" required />
      <button type="submit">作成</button>
    </form>
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
import { useInventoriesStore, type InventoryItem } from '@/stores/inventory'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const inventoriesStore = useInventoriesStore()
const { inventories } = storeToRefs(inventoriesStore)

const isLoading = ref(true)
const newTitle = ref<string>()

const getInventory = async () => {
  isLoading.value = true
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/inventories`, {
      headers: {
        Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
      },
    })
    inventoriesStore.updateInventories(response.data as InventoryItem[])
    console.log(inventories)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const createNewItem = async () => {
  if (newTitle.value == null) {
    // TODO: err message
    return
  }
  // TODO: ローディング共通化
  isLoading.value = true
  axios
    .post(
      `${import.meta.env.VITE_API_ENDPOINT}/inventories`,
      { title: newTitle.value },
      {
        headers: {
          Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
        },
      },
    )
    .then(() => {
      newTitle.value = undefined
      getInventory()
    })
}

onMounted(() => {
  getInventory()
})

onBeforeUnmount(() => {
  inventoriesStore.$reset()
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
