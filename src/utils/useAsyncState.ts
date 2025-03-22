import type { AxiosResponse } from 'axios'
import { ref, type Ref } from 'vue'

type useAsyncStateReturnType<T> = {
  // レスポンスデータ
  state: Ref<T | undefined>
  // ローディング表示状態
  isLoading: Ref<boolean>
}

/**
 * 非同期処理のHook
 * @param promise Promise
 *
 * コンポーネントからの使用例
 * const { state, isLoading } = useAsyncState(axios.get('/hoge'))
 */
export const useAsyncState = <T>(
  promise: Promise<AxiosResponse<T>>,
): useAsyncStateReturnType<T> => {
  const state = ref<T>()
  const isLoading = ref(false)

  const _resetState = () => {
    state.value = undefined
    isLoading.value = false
  }

  const request = async () => {
    _resetState()

    isLoading.value = true

    promise
      .then((response) => {
        state.value = response.data
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  request()

  return {
    state,
    isLoading,
  }
}
