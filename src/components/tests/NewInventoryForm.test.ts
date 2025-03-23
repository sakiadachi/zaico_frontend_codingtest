// ダミーテスト
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NewInventoryForm from '../templates/inventory-add/NewInventoryForm.vue'

describe('NewInventoryForm', () => {
  it('ローディング中の場合、フォームのサブミットイベントをemitしない', () => {
    const wrapper = mount(NewInventoryForm, {
      props: {
        isLoading: true,
      },
    })
    const instance = wrapper.vm
    // TODO: anyを使わない コンポーネントのmethodの型がうまく取得できていない
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (instance as any).onSubmit

    onSubmit()

    expect(wrapper.emitted()).not.toHaveProperty('onSubmit')
  })
  it('ローディング中ではない場合、フォームのサブミットイベントをemitする', () => {
    const wrapper = mount(NewInventoryForm, {
      props: {
        isLoading: false,
      },
    })

    const instance = wrapper.vm
    // TODO: anyを使わない コンポーネントのmethodの型がうまく取得できていない
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (instance as any).onSubmit

    onSubmit()

    expect(wrapper.emitted()).toHaveProperty('onSubmit')
  })
})
