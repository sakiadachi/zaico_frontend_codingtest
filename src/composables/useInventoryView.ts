import { useInventoriesStore } from '@/stores/inventory'
import { axiosGet } from '@/utils/axios'
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useInventoryView = () => {
  const store = useInventoriesStore()
  const { inventories } = storeToRefs(store)

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
