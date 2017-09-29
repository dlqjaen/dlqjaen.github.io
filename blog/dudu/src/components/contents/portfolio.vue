<template>
  <section>
    <h4 class="current-menu menu-title">포트폴리오</h4>
    <button class="portfolio-btn prev-btn" @click="carouselPrev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
    <button class="portfolio-btn next-btn" @click="carouselNext"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>    
    <article class="portfolio-show-box">
      <h5 class="a11y-hidden">포트폴리오 내용 상자</h5>
      <ul class="portfolio-wrapper" :style="carouselMove">
        <li class="portfolio-preview" v-for="(data, index) in portfolioData" :key="index">
          <a :href="data.link" target="_blank"><img class="portfolio-img" :src="data.img" :alt="data.title + ' 대표이미지'"></a>
          <p class="my-station">{{data.info}}</p>
          <p class="portfolio-title"><a :href="data.link" target="_blank">{{data.title}}</a></p>
          <p class="portfolio-content">{{data.content}}</p>
        </li>
      </ul>
    </article>  
  </section>
</template>

<script>
import weatherSound from '../../assets/front-weather-sound.png'
import dada36 from '../../assets/dada36.com.png'
import singleSingle from '../../assets/single-single.jpg'
import donga from '../../assets/donga.png'
import ksw from '../../assets/k-sw.png'
export default {
  data () {
    return {
      portfolioData: [
        {
          'link': 'http://front.weather-sound.com/',
          'img': weatherSound,
          'info': '프론트엔드 개발 | 기간 : 17.08 ~ 17.08 (1개월) | 기여도 : 75%',
          'title': '협업 프로젝트 : Weater-Sound',
          'content': '날씨에 따라 음악을 추천해보자! 라는 생각으로 시작한 프로젝트입니다. 3명의 Front-End-Developer, 2명의 Back-End-Developer, 3명의 IOS-Developer로 구성된 팀으로 저는 Front-End팀 팀장의 역할을 수행했습니다. SPA로 제작하여 웹접근성을 최대한 준수한 뮤직플레이 사이트입니다.'
        },
        {
          'link': 'http://dada36.com',
          'img': dada36,
          'info': '프론트엔드 개발 | 기간 : 16.03 ~ 16.10 (7개월) | 기여도 : 100%',
          'title': '동아대학교 산업디자인학과 36회 졸업전시회',
          'content': '3명의 디자이너와 1명의 개발자로 구성된 팀으로 저는 팀원팀장(개발)을 담당 했습니다. 개발에 사용된 기술로는 HTML, CSS, JavaScript(jQuery)가 있습니다.'
        },
        {
          'link': 'https://youtu.be/1O6xeknSTv0',
          'img': singleSingle,
          'info': '아두이노/processing 개발 | 기간 : 16.03 ~ 16.10 (7개월) | 기여도 : 100%',
          'title': 'Single Single',
          'content': '혼자 사는 1인 가구에게 즐거움을 전할 수 있는 음악가의 방을 만들어보자. 라는 생각으로 시작한 프로젝트 입니다. 코드개발은 혼자하였고 팀에서 팀장의 역할을 수행했습니다. 1. 음악에 따라 춤추는 인형, 2. 밀어서 연주하는 피아노, 3. 의자에 않은 수에따라 노래와 패턴이 변하는 옷걸이, 4. 태블릿의 드럼 사진을 터치하여 실제 드럼소리와 해당 이미지의 액자가 반응하는 드럼액자를 만들었습니다.'
        },
        {
          'link': 'http://biz.donga.ac.kr/sites/biz/index.do',
          'img': donga,
          'info': '프론트엔드 개발 | 기간 : 15.09 ~ 15.11 (3개월) | 기여도 : 70%',
          'title': '동아대학교 경영대학 웹사이트 리뉴얼',
          'content': '디자이너 1명, 백엔드 개발자 1명, 프론트엔드 개발자 1명으로 이루어져 프론트엔드 개발에 참여하였습니다. 프로젝트의 기획부터 최종 배포까지 다 함께 의논하고 참여했습니다.'
        },
        {
          'link': 'http://www.k-software.kr/',
          'img': ksw,
          'info': '보조디자이너/프론트엔드 개발 | 기간 : 15.04 ~ 16.04 (12개월) | 기여도 : 50%',
          'title': 'K-SW포럼 웹 경진대회',
          'content': 'K-SW포럼 웹 경진대회 보조디자이너로 참여하여 대상을 수상하였습니다. 그 후 실제 웹사이트로 제작까지 맡아 처음으로 프론트엔드개발에 참여했습니다.'
        }
      ],
      carouselMove: {},
      carouselCount: 0
    }
  },
  methods: {
    carouselNext () {
      if (this.carouselCount === (-100 * (this.portfolioData.length - 1))) {
        this.carouselCount = 100
      }
      let carouselCount2 = this.carouselCount
      this.carouselMove = {
        'marginLeft': -100 + carouselCount2 + '%'
      }
      this.carouselCount = this.carouselCount - 100
    },
    carouselPrev () {
      if (this.carouselCount === 0) {
        this.carouselCount = -100 * this.portfolioData.length
      }
      let carouselCount2 = this.carouselCount
      this.carouselMove = {
        'marginLeft': 100 + carouselCount2 + '%'
      }
      this.carouselCount = this.carouselCount + 100
    }
  }
}
</script>

<style scoped>
.portfolio-show-box{
  overflow: hidden;
  width: 65%;
  position: absolute;
  top: calc(50% + 25px);
  left: calc(50% + 30px);
  transform: translateX(-50%) translateY(-50%);
}
.portfolio-wrapper{
  width: calc(100% * 5);
  transition: all 0.3s ease-in-out;
}
.portfolio-wrapper::after{
  content:'';
  display:block;
  clear:both;
}
.portfolio-preview{
  border-radius: 5px;
  float: left;
  box-sizing: border-box;
  padding: 15px;
  width: calc(100% / 5);
  background: rgb(255,255,255);
}
.portfolio-img{
  border-radius: 5px;
  width: 100%;
}
.portfolio-btn{
  color: rgb(50, 50, 50);
  cursor: pointer;
  position: absolute;
  top: 50%;
  font-size: 2rem;
  z-index: 10000;
}
.portfolio-content{
  clear: both;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word;
  font-size: 1rem;
  line-height: 1.5em;
}
.prev-btn{
  left: calc(4% + 60px);
}
.next-btn{
  right: 4%;
}
.portfolio-title{
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #5093e1;
  font-size: 1.6rem;
}
.portfolio-title::after{
  content:'';
  display:block;
  clear:both;
}
.my-station{
  text-align: right;
  color: rgb(180,180,180);
  font-size: 0.9rem;
}
@media screen and (max-width: 600px){
  .portfolio-preview{
    padding: 10px;
  }
  .portfolio-btn{
    display: none;
  }
  .portfolio-show-box{
    overflow: none;
    position: none;
    margin: 0 auto;
    width: 100%;
    top: calc(8vh + 52px);
    left: 0;
    transform: translateY(0);
  }
  .portfolio-preview{
    float: none;
    margin-bottom: 1%;
  }
  .my-station{
    text-align: left;
  }
}
</style>
