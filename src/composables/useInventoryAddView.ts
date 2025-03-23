import { createInventory } from '@/utils/api'
import useAsyncState from '@/utils/useAsyncState'
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export const useInventoryAddView = () => {
  const newTitle = ref<string>('')

  const _createInventory = () => createInventory({ title: newTitle.value })

  const { isLoading, request } = useAsyncState(_createInventory)

  const resetTitle = () => {
    newTitle.value = ''
  }

  const createNewItem = () =>
    request().finally(() => {
      resetTitle()
    })

  onBeforeRouteLeave((to, from, next) => {
    // 入力値が存在しない場合
    if (newTitle.value.length === 0) {
      return next()
    }
    // 編集中の場合、確認ダイアログを表示する
    if (window.confirm('編集内容が失われます。よろしいですか?')) {
      return next()
    }
    next(false)
  })

  return {
    newTitle,
    isLoading,
    resetTitle,
    createNewItem,
  }
}
