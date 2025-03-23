import { createInventory } from '@/utils/api'
import useAsyncState from '@/utils/useAsyncState'
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export default function useInventoryAddView() {
  const newTitle = ref<string>('')

  const { isLoading, request } = useAsyncState(() => createInventory({ title: newTitle.value }))

  const resetTitle = () => {
    newTitle.value = ''
  }

  const createNewItem = async () => {
    await request()
    // 成功したらタイトルを初期化する
    resetTitle()
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
    return next(false)
  })

  return {
    newTitle,
    isLoading,
    resetTitle,
    createNewItem,
  }
}
