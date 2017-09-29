<template>
  <section>
    <ul class="contact-wrapper">
      <li class="contact-list">
        <h4 class="current-menu">연락하기</h4>
      </li>
      <li class="contact-list">
        <label class="contact-label" for="contact-name">Name</label>
        <input class="contact-input" :value="name" @input="setName" type="text" id="contact-name" placeholder="홍길동">
      </li>
      <li class="contact-list">
        <label class="contact-label" for="contact-message">Message</label>
        <textarea class="contact-input" :value="content" @input="setContent" name="contact-message" id="contact-message" cols="30" rows="15" placeholder="메세지를 보냅니다."></textarea>
      </li>
      <li><button class="send-btn" type="submit" @click="sendEmail">Send</button></li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    setName (e) {
      this.name = e.target.value
    },
    setContent (e) {
      this.content = e.target.value
    },
    sendEmail () {
      if (this.name === '') {
        alert('이름을 입력해주세요.')
      } else if (this.content === '') {
        alert('내용을 입력해주세요.')
      } else {
        window.emailjs.send('gmail', 'template_YIMwoUkb', {'from_name': this.name, 'message_html': this.content})
        .then(function (response) {
          console.log('success. status=%d, text=%s', response, response.status, response.text)
          alert('메세지가 성공적으로 보내졌습니다.')
        }, function (err) {
          console.log('failed. error=', err)
          alert('메세지 전송에 실패했습니다.')
        })
        this.name = ''
        this.content = ''
      }
    }
  }
}
</script>


<style scoped>
.contact-wrapper{
  box-sizing: border-box;
  width: 70%;
  position: absolute;
  left: calc(50% + 30px);
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: #fff;
  padding: 60px;
  border-radius: 5px;
}
.contact-list{
  margin-bottom: 30px;
}
.contact-label{
  margin-bottom: 10px;
  display: block;
}
.contact-input{
  border-radius: 3px;
  background: rgba(0,0,0,0.1);
  border: none;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
}
.send-btn{
  width: 100%;
  background: rgb(246, 81, 119);
  border-radius: 3px;
  padding: 15px 0;
  color: #fff;
  font-size: 1rem;
}
@media screen and (max-width: 600px){
  .contact-wrapper{
    padding: 30px;
    height: 92vh;
    width: 100%;
    top: 8vh;
    left: 0;
    transform: translateY(0);
    border-radius: 5px 5px 0 0;
  }
}
</style>
