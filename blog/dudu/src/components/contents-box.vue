<template>
  <article class="main-section">
    <h3 class="a11y-hidden">메인내용상자</h3>
    <transition name="main-transition" appear>
      <router-view></router-view>
    </transition>
  </article>
</template>

<style>
.main-section{
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15px 15px 75px;
}
.current-menu{
  font-weight: normal;
  font-size: 1.4rem;
}
.menu-title{
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px;
  /* border-top: 1px solid black; */
}
.main-transition-enter{
 opacity: 0;
}
.main-transition-enter-active{
  /* animation: slide-in 1s ease forwards; */
  transition: all 0.5s ease-in-out;
}
.main-transition-leave-active{
  /* animation: slide-out 1s ease forwards; */
  transition: all 0.5s ease-in-out;
}
.main-transition-leave-to{
  opacity: 0;
}
/* @keyframes slide-in{
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0);
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(100%);
  }
} */
@media screen and (max-width: 600px){
  .main-section{
    padding: 0;
    padding-top: 8vh;
  }
  .menu-title{
    border: none;
    margin: 0;
    border-radius: 0;
    width: 100%;
  }
}
</style>
