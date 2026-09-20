import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the portfolio content', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Denis Cabrera')
    expect(wrapper.text()).toContain('Experiencia')
    expect(wrapper.text()).toContain('METRICA Consulting')
  })
})
