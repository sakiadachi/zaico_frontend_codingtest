import axios from 'axios'
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export const useInventoryAddView = () => {
  const newTitle = ref<string>('')
  const isLoading = ref(true)

  const resetTitle = () => {
    newTitle.value = ''
  }

  const createNewItem = async () => {
    // TODO: ローディング共通化
    isLoading.value = true
    axios
      .post(
        `${import.meta.env.VITE_API_ENDPOINT}/inventories`,
        { title: newTitle.value },
        {
          headers: {
            Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
          },
        },
      )
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
    if (window.confirm('編集内容が失われます。よろしいですか?')) {
      return next()
    }
    next(false)
  })

  return {
    newTitle,
    resetTitle,
    createNewItem,
  }
}
