import type { InventoryItem } from '@/stores/inventory'
import { axiosGet } from '@/utils/axios'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useInventoryView = () => {
  const inventories = ref<InventoryItem[]>([])
  const isLoading = ref(true)

  const getInventory = async () => {
    isLoading.value = true

    axiosGet('/inventories')
      .then((res) => {
        inventories.value = res.data
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
