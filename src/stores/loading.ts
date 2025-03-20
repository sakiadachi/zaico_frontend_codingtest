import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * ローディング表示状態のストア
 */
export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref<boolean>(false)

  const updateLoading = (newData: boolean) => {
    isLoading.value = newData
  }

  const $reset = () => {
    isLoading.value = false
  }

  return { isLoading, updateLoading, $reset }
})
