import Vue from 'vue/dist/vue.common.js'

new Vue({
  el: '#app',
  data: {
    page_list: {
      posting: true,
      contact: false
    },
    contact: {
      mail: '',
      content: ''
    }
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
    },
    setData: function(e) {
      let target = e.target;
      this.contact[target.dataset.target] = target.value
    },
    sendEmail: function() {
      if (this.contact.mail === '') {
        alert('메일을 입력해주세요.')
      } else if (this.contact.content === '') {
        alert('내용을 입력해주세요.')
      } else {
        window.emailjs.send('gmail', 'template_YIMwoUkb', {'from_name': this.contact.mail, 'message_html': this.contact.content})
        .then(function (response) {
          console.log('success. status=%d, text=%s', response, response.status, response.text)
          alert('메세지가 성공적으로 보내졌습니다.')
        }, function (err) {
          console.log('failed. error=', err)
          alert('메세지 전송에 실패했습니다.')
        })
        this.contact.mail = ''
        this.contact.content = ''
      }
    }
  }
})

