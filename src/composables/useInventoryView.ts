import { useInventoriesStore } from '@/stores/inventory'
import { getInventories } from '@/utils/api'
import useAsyncState from '@/utils/useAsyncState'
import { storeToRefs } from 'pinia'

export const useInventoryView = () => {
  const store = useInventoriesStore()
  const { inventories } = storeToRefs(store)

  const _getInventories = () =>
    getInventories().then((res) => {
      inventories.value = res.data
    })

  const { isLoading, request } = useAsyncState(_getInventories)

  request()

  return {
    inventories,
    isLoading,
  }
}
