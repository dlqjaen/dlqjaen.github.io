import Vue from 'vue/dist/vue.common.js'

export default {
  el: '#posting',
  data: {
    posting_list: [
      {name: 'test1'},
      {name: 'test2'}
    ]
  },
  methods: {
    changeTab: function(path) {
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
}

