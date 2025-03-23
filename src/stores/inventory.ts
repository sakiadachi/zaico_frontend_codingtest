import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type InventoryItem } from '@/utils/api'

/**
 * 在庫一覧のストア
 */
export const useInventoriesStore = defineStore('inventories', () => {
  const inventories = ref<InventoryItem[]>([])

  const $reset = () => {
    inventories.value = []
  }

  return { inventories, $reset }
})
