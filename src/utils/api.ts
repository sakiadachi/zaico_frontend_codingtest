import { axiosInstance } from './axios'

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

/** 在庫一覧を取得する */
export const getInventories = () => axiosInstance.get('/inventories')

/**
 * 在庫詳細を取得する
 * @param id 在庫のID
 */
export const getInventoryDetail = (id: string) => axiosInstance.get(`/inventories/${id}`)

/**
 * 在庫を作成する
 */
export const createInventory = (item: { title: string }) =>
  axiosInstance.post(`/inventories/`, item)
