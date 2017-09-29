import Vue from 'vue'
import Navigation from '@/components/navigation.vue'

describe('Navigation.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Navigation)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
