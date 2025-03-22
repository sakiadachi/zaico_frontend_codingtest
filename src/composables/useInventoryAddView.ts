import { createInventory } from '@/utils/api'
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export const useInventoryAddView = () => {
  const newTitle = ref<string>('')
  const isLoading = ref(false)
  const resetTitle = () => {
    newTitle.value = ''
  }

  const createNewItem = () => {
    isLoading.value = true

    createInventory({ title: newTitle.value })
      .then(() => {
        resetTitle()
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  onBeforeRouteLeave((to, from, next) => {
    // 入力値が存在しない場合
    if (newTitle.value.length === 0) {
      return next()
    }
    // 編集中の場合、確認ダイアログを表示する
    if (window.confirm('編集内容が失われます。よろしいですか?')) {
      return next()
    }
    resetTitle()
    next(false)
  })

  return {
    newTitle,
    isLoading,
    resetTitle,
    createNewItem,
  }
}
