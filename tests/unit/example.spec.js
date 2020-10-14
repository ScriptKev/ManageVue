import { shallowMount } from '@vue/test-utils'
import testingvue from '@/pages/Home/components/testingvue.vue'

describe('testingvue.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(testingvue, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
