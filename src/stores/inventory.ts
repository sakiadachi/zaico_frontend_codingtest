import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface InventoryItem {
  id: number
  title: string
  quantity: number
  unit: string
  category: string
  place: string
  item_image: {
    url: string
  }
}

/**
 * 在庫一覧のストア
 */
export const useInventoriesStore = defineStore('inventories', () => {
  const inventories = ref<InventoryItem[]>([])

  const updateInventories = (newData: InventoryItem[]) => {
    inventories.value = newData
  }

  const $reset = () => {
    inventories.value = []
  }

  return { inventories, updateInventories, $reset }
})

/**
 * 在庫詳細情報のストア
 */
export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref<InventoryItem>()

  const updateInventory = (newData?: InventoryItem) => {
    inventory.value = newData
  }

  const $reset = () => {
    inventory.value = undefined
  }

  return { inventory, updateInventory, $reset }
})
