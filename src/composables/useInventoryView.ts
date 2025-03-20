import type { InventoryItem } from '@/stores/inventory'
import axios from 'axios'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useInventoryView = () => {
  const inventories = ref<InventoryItem[]>([])
  const isLoading = ref(true)

  const getInventory = async () => {
    isLoading.value = true
    // TODO: 共通処理
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/inventories`, {
        headers: {
          Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
        },
      })
      .then((res) => {
        inventories.value = res.data
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  onMounted(() => {
    getInventory()
  })

  onBeforeUnmount(() => {
    inventories.value = []
  })

  return {
    inventories,
    isLoading,
    getInventory,
  }
}
