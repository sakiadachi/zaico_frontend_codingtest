import { describe, it, expect, vi, beforeEach } from 'vitest'
import useInventoryAddView from '../useInventoryAddView'
import { nextTick, ref } from 'vue'
import * as api from '@/utils/api'

const mockAxiosResponse = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
}

describe('useInventoryAddView', () => {
  vi.mock('../../utils/api', async (importOriginal) => {
    const actual = await importOriginal<typeof api>()
    return {
      ...actual,
      createInventory: () => Promise.resolve(mockAxiosResponse),
    }
  })

  vi.mock('useAsyncState', async () => {
    return {
      isLoading: ref(false),
      state: ref(),
      request: () => Promise<void>,
    }
  })

  beforeEach(() => {
    vi.resetAllMocks() // 各テスト前にモックをリセット
  })

  const { newTitle, createNewItem } = useInventoryAddView()
  const postApiSpy = vi.spyOn(api, 'createInventory')

  describe('createNewItem', () => {
    it('編集状態でpostリクエストしている、完了後編集状態が初期化されていること', async () => {
      newTitle.value = 'ペン'
      await createNewItem()
      await nextTick()
      expect(postApiSpy).toHaveBeenCalledWith({ title: 'ペン' })
      expect(newTitle.value).toBe('')
    })

    it.todo('createNewItem: 異常系', () => {})
  })
})
