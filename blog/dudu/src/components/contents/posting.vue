<template>
  <article>
    <h4 class="current-menu menu-title">블로그</h4>
    <ul class="post-wrapper">
      <router-link :to="'/posting/' + data.title" tag="li" class="post-preview" @click.native="setDetailPosting(index)" v-for="(data, index) in getPostingData" :key="index">
        <a href="#">
          <img class="post-preview-img" :src="data.img" alt="포스팅에 관련된 이미지">
          <ul class="posting-text">
            <li class="post-preview-date">{{data.date}}</li>
            <li class="post-preview-title">{{data.title}}</li>
            <li class="post-preview-content">{{data.description}}</li>
            <li class="post-preview-tag">{{data.tag}}</li>
          </ul>
        </a>
      </router-link>
    </ul>
  </article>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getPostingData'
    ])
  },
  methods: {
    ...mapMutations([
      'setDetailPosting'
    ])
  }
}
</script>

<style scoped>
.post-wrapper::after{
  content:'';
  display:block;
  clear:both;
}
.post-wrapper{
  margin-left: 1%;
  display: flex;
  flex-wrap: wrap;
}
.post-preview{
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 1% 2% 1%;
  width: 31%;
  background: rgb(255,255,255);
}
.post-preview:hover::after{
  opacity: 0;
  z-index: -1;
}
.post-preview::after{
  content: ' ';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 5px;
  position: absolute;
  background: rgba(0,0,0,0.1);
  transition: all 0.5s ease-in-out;
}
.post-preview-img{
  width: 100%;
}
.posting-text{
  padding: 10px;
}
.post-preview-date{
  text-align: right;
  color: rgb(180,180,180);
  font-size: 0.9rem;
}
.post-preview-title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  color: #5093e1;
  font-weight: bold;
}
.post-preview-content{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word;
  font-size: 1rem;
  line-height: 1.5em;
  color: #555;
}
.post-preview-tag{
  color: rgb(180,180,180);
  font-size: 0.9rem;
}
@media screen and (max-width: 600px){
  .post-preview{
    width: 100%;
    margin: 0 0 2% 0;
  }
  .post-wrapper{
    margin-left: 0;
  }
  .post-preview::after{
    display: none;
  }
}
</style>
