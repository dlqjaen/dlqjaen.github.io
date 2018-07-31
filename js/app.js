import Vue from 'vue/dist/vue.common.js'
import posting from './posting.js'

new Vue({
  el: '#app',
  data: {
    page_list: {
      posting: true,
      contact: false
    },
  },
  methods: {
    changeTab: function(path) {
      console.log(123)
      for (let index in this.page_list) {
        this.page_list[index] = false;
      }
      if (path == 'posting') {
        this.page_list.posting = true;
      }
      if (path == 'contact') {
        this.page_list.contact = true;
      }
    }
  }
})

