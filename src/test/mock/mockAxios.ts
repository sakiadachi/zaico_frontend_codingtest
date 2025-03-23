import type { axiosInstance } from '@/utils/axios'
import { vi } from 'vitest'

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
  // and any other request type you want to mock
}))

function createAxios() {
  vi.mock('axiosInstance', async (importActual) => {
    const actual = await importActual<typeof axiosInstance>()

    return {
      ...actual,
      get: mocks.get,
      post: mocks.post,
    }
  })
}

const mockedAxios = createAxios()

export { mockedAxios }
