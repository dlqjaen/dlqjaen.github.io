<template>
  <section>
    <h5 class="current-menu menu-title">{{getDetailPosting.title}}</h5>
    <router-link tag="a" to="/posting" class="back-btn" title="블로그 포스팅으로 돌아가기">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </router-link>
    <section class="posting-content">
      <h6 class="a11y-hidden">포스팅 내용</h6>
    </section>
    <article id="disqus_thread"></article>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getDetailPosting'
    ])
  },
  mounted () {
    var d = document
    var s = d.createElement('script')
    s.src = 'https://https-dlqjaen-github-io.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s)
  }
}
</script>

<style scoped>
.back-btn{
  /* background: rgb(47, 50, 58); */
  padding: 10px;
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 2rem;
  color: #444444;
}
.posting-content{
  padding: 30px;
  border-radius: 5px;
  background: #fff;
}
#disqus_thread{
  padding: 10px;
}
@media screen and (max-width: 600px){
  .back-btn{
    top: 8vh;
    font-size: 1.4rem;
    padding: 10px;
  }
  .posting-content{
    padding: 15px;
  }
}
</style>
