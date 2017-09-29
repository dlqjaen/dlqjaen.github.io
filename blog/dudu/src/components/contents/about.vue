<template>
  <section>
    <h4 class="current-menu menu-title">블로거 소개</h4>
    <article class="profile-wrapper">
      <img class="profile-img" src="../../assets/profile.jpg" alt="블로거 이범두의 사진 이미지">
      <ul class="profile-content">
        <li class="profile-title">Front-End Developer</li>
        <li class="profile-info">Name : 이범두</li>
        <li class="profile-info">Email : a01055255417@gmaile.com</li>
        <li class="profile-info">Phone : 010-5525-5417</li>
        <li class="tag-list">
          <p>My Service</p>
          <span class="tag service-tag">웹 표준</span>
          <span class="tag service-tag">웹 접근성</span>
          <span class="tag service-tag">반응형 웹</span>
          <span class="tag service-tag">SPA</span>
          <span class="tag service-tag">SEO</span>
        </li>
        <li class="tag-list">
          <p>Skils</p> 
          <span class="tag skill-tag">HTML</span>
          <span class="tag skill-tag">CSS</span>
          <span class="tag skill-tag">JavaScript</span>
          <span class="tag skill-tag">Sass</span>
          <span class="tag skill-tag">Pug</span>
          <span class="tag skill-tag">Vue.js</span>
          <span class="tag skill-tag">jQuery</span>
        </li>
        <li class="tag-list">
          <p>Design Tool</p>
          <span class="tag design-tool-tag">PhotoShop</span>
          <span class="tag design-tool-tag">Illustrator</span>
          <span class="tag design-tool-tag">Premiere / AfterEffect</span>
        </li>
        <li class="profile-introduce">
          Front-End Developer는 시시각각변하는 Web의 세계에서 새로운 것을 배우는 것에 두려워하지 않고 필요한 기술을 필요한 곳에 적절하게 선택하여 사용할 수 있어야 하며
          Web을 이용하는 유저들에게 평등한 정보를 제공하고자 노력하는 따뜻한 마음씨를 가지고 있어야 합니다.
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.profile-wrapper{
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: calc(50% + 30px);
  width: 85%;
  transform: translateX(-50%) translateY(-50%);
}
.profile-wrapper::after{
  content:'';
  display:block;
  clear:both;
}
.profile-content{
  box-sizing: border-box;
  width: 50%;
  padding: 2%;
  float: left;
}
.profile-img{
  display: block;
  float: left;
  border-radius: 5px;
  width: 50%;
}
.profile-title{
  font-size: 1.6rem;
  padding-bottom: 15px;
}
.profile-info{
  padding: 3px 0;
}
.tag-list{
  padding: 3px 0;
}
.tag{
  padding: 3px 5px;
  margin-bottom: 2px;
  border-radius: 5px;
  color: white;
  display: inline-block;
}
.skill-tag{
  background: rgb(246, 81, 119);
}
.service-tag{
  background: rgb(80, 147, 255);
}
.design-tool-tag{
  background: rgb(80, 193, 78);
}
.profile-introduce{
  padding-top: 15px;
  line-height: 1.6;
}
@media screen and (max-width: 600px){
  .profile-img{
    width: 100%;
  }
  .profile-wrapper{
    width: 100%;
    top: calc(8vh + 52px);
    left: 0;
    transform: translateY(0);
  }
  .profile-content{
    padding: 4%;
    width: 100%;
  }
}
</style>
