<template>
  <nav>
    <h3 class="a11y-hidden">네비게이션</h3>
    <ul class="mobile-header-wrapper">
      <li class="mobile-header-list"><button class="show-sidebar-btn" title="사이드 메뉴 보이기"  @click="SideMenuTogle"><i class="fa fa-chevron-right" :style="sideMenuTogleButton" aria-hidden="true"></i></i></button></li>
      <router-link tag="li" to="/" class="mobile-header-list" title="홈으로 바로가기 링크"><a href class="mobile-logo-link"><img src="../assets/logo.svg" @click="closeMenu" alt="홈으로 가기 링크"></a></router-link>
    </ul>
    <ul class="nav-wrapper" :style="sideMenuTogleStyle">
      <router-link tag="li" to="/" class="nav-list" title="홈으로 바로가기 링크">
        <a class="logo-link" href>
          <img src="../assets/logo.svg" alt="홈으로 가기 링크">
        </a>
      </router-link>
      <router-link tag="li" @click.native="closeMenu" to="/posting" class="nav-list" title="포스팅 보기">
        <a class="link-button" href>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          <span class="mobile-link-title">Posting</span>
        </a>
      </router-link>
      <router-link tag="li" @click.native="closeMenu" to="/portfolio" class="nav-list" title="포트폴리오 보기">
        <a class="link-button" href>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
          <span class="mobile-link-title mobile">Portfolio</span>
        </a>
      </router-link>
      <router-link tag="li" @click.native="closeMenu" to="/about" class="nav-list" title="블로거 소개">
        <a class="link-button" href>
          <i class="fa fa-user" aria-hidden="true"></i>
          <span class="mobile-link-title">About</span>
        </a>
      </router-link>
      <router-link tag="li" @click.native="closeMenu" to="/contact" class="nav-list" title="블로거와 연락하기">
        <a class="link-button" href>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span class="mobile-link-title">Contact</span>
        </a>
      </router-link>
      <li class="nav-list" title="블로거의 깃헙">
        <a class="github-link" @click="closeMenu" href="https://github.com/dlqjaen" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
          <span class="mobile-link-title">Github</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      sideMenuTogleButton: {},
      sideMenuTogleStyle: {}
    }
  },
  methods: {
    SideMenuTogle: function (e) {
      if (this.sideMenuTogleStyle.marginLeft) {
        this.sideMenuTogleButton = {}
        this.sideMenuTogleStyle = {}
      } else {
        this.sideMenuTogleButton = {
          transform: 'rotate(' + 180 + 'deg)'
        }
        this.sideMenuTogleStyle = {
          marginLeft: 0 + '%'
        }
      }
    },
    closeMenu: function () {
      if (this.sideMenuTogleStyle.marginLeft) {
        this.sideMenuTogleButton = {}
        this.sideMenuTogleStyle = {}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-wrapper{
  position: fixed;
  background: rgb(47, 50, 58);
  height: 100vh;
  width: 60px;
  text-align: center;
  z-index: 9000;
  transition: all 0.3s ease-in-out;
}
.logo-link{
  display: block;
  padding: 20px 0;
  margin-bottom: 20px;
}
.logo-link img{
  width: 60%;
}
.link-button{
  display: block;
  padding: 20px 0;
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
.link-button:hover, .link-button:focus{
  color: #000;
  background: rgb(245, 245, 245);
}
.github-link{
  display: block;
  padding: 20px 0;
  font-size: 1.6rem;
  color: #fff;
}
.github-link:hover, .github-link:focus{
  background: rgb(246, 81, 119);
  color: #000;
}
.mobile-header-wrapper{
  display: none;
}
.mobile-link-title{
  display: none;
}
@media screen and (max-width: 600px){
  .mobile-link-title{
    display: inline;
    padding-left: 5px;
  }
  .logo-link{
    display: none;
  }
  .nav-wrapper{
    margin-left: -100%; 
    margin-top: 8vh;
    background: rgba(47, 50, 58, 0.9);
    width: 100%;
  }
  .mobile-header-wrapper{
    display: block;
    width: 100%;
    height: 8vh;
    position: fixed;
    background: rgb(47, 50, 58);
    z-index: 10000;
  }
  .mobile-logo-link img{
    padding: 1vh 30px;
    height: 5vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .mobile-header-wrapper::after{
    content:'';
    display:block;
    clear:both;
  }
  .show-sidebar-btn{
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
  }
  .show-sidebar-btn i {
    transition: all 0.3s ease-in-out;
  }
  .link-button:hover, .link-button:focus{
    background: rgb(80, 147, 255);
  }
}
</style>
