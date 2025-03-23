import type { AxiosResponse } from 'axios'
import axios from 'axios'
import { ref, type Ref } from 'vue'

type useAsyncStateReturnType<T> = {
  /**
   * レスポンスデータ
   */
  state: Ref<T | undefined>
  /**
   * ローディング表示状態
   */
  isLoading: Ref<boolean>
  /**
   * リクエスト関数
   */
  request: () => Promise<void | AxiosResponse<T, any>>
}

/**
 * axiosを使用した非同期処理のためのカスタムフック
 * @param promiseCallback - axiosレスポンスを含むレスポンスを返す関数
 *
 * @example
 * const { state, isLoading, request } = useAsyncState(()=> axios.get('/test'))
 * request()
 *
 * @example
 * // ストアで状態管理する場合
 * const store = useTestStore()
 * const { tests } = storeToRefs(store)
 *
 * const { isLoading, request } = useAsyncState(() =>
 *   axios.get('/test').then((res) => {
 *     test.value = res.data
 *   }),
 * )
 */
export default function useAsyncState<T>(
  promiseCallback: () => Promise<AxiosResponse<T> | void>,
): useAsyncStateReturnType<T> {
  const state = ref<T>()
  const isLoading = ref(false)

  /**
   * 保持する状態を初期化する
   */
  const _resetState = () => {
    state.value = undefined
    isLoading.value = false
  }

  /**
   * リクエストを実行する
   * ローディング状態の管理と、完了時にレスポンスデータを更新する
   */
  const request = async () => {
    _resetState()

    isLoading.value = true

    promiseCallback()
      .then((response) => {
        if (response && response.data) {
          state.value = response.data
        }
        return response
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  return {
    state,
    isLoading,
    request,
  }
}
