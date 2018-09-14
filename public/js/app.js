import Vue from 'vue/dist/vue.common.js'
import webpack_custom from '../md/webpack_custom.md'
import profile_page_test from '../md/profile_page_testcase.md'

new Vue({
  el: '#app',
  data: {
    page_list: {
      posting: true,
      posting_content: false,
      contact: false
    },
    posting_content_list: {
      webpack_custom, profile_page_test
    },
    posting_content: '',
    contact: {
      mail: '',
      content: '',
      email_check: false,
      content_check: false
    },
  },
  methods: {
    // navigation
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
    },
    // posting
    enterPosting: function(key) {
      this.page_list.posting_content = true;
      this.posting_content = this.posting_content_list[key];
    },
    // contact
    setData: function(e) {
      let target = e.target;
      this.contact[target.dataset.target] = target.value

      if (target.dataset.target == 'mail') {this.emailCheck()}
      if (target.dataset.target == 'content') {this.contentCheck()}
    },
    emailCheck: function() {
      var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

      this.contact.email_check = (!regExp.test(this.contact.mail));
    },
    contentCheck: function() {
      this.contact.content_check = this.contact.content.length == 0;
    },
    sendEmail: function() {
      this.emailCheck()
      this.contentCheck()

      if (this.contact.email_check || this.contact.content_check) {
        return;
      }
    }
  },
})

