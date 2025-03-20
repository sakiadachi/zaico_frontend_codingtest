import { type InventoryItem } from '@/stores/inventory'
import { axiosGet } from '@/utils/axios'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useInventoryDetailView = () => {
  const route = useRoute()

  /** 在庫詳細 */
  const inventory = ref<InventoryItem>()
  const isLoading = ref(false)

  const getInventoryDetail = async () => {
    isLoading.value = true
    axiosGet(`/inventories/${route.params.id}`)
      .then((res) => {
        inventory.value = res.data
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  onMounted(() => {
    getInventoryDetail()
  })

  onBeforeUnmount(() => {
    inventory.value = undefined
  })

  return {
    inventory,
    isLoading,
  }
}
