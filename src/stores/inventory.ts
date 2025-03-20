import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface InventoryItem {
  id: number
  title: string
  quantity: number | null
  unit: string
  category: string
  categories: string[]
  state: string
  place: string
  etc: string
  code: string
  item_image: {
    url: string | null
  }
}

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
