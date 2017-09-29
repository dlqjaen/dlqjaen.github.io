<template>
  <section id="app" v-cloak>
    <h2 class="a11y-hidden">Blog Main</h2>
    <navigation></navigation>
    <content-box></content-box>
    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import navigation from './components/navigation'
import contentBox from './components/contents-box'

export default {
  name: 'app',
  components: {
    navigation, contentBox
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
v-cloak{
  display: none;
}
body{
  width: 100%;
  background: rgb(245,245,245);
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
  margin: 0;
}
h1, h2, h3, h4, h5{
  padding: 0;
  margin: 0;
}
ul, li, ol{
  margin: 0;
  padding: 0;
  list-style: none;
}
button{
  background: none;
  border: none;
}
p{
  margin: 0;
  padding: 5px 0;
}
a{
  text-decoration: none;
}
.a11y-hidden{
  position: absolute;
  clip: rect(0,0,0,0);
  width: 1px;
  height: 1px;
  margin: -1000px;
  overflow: hidden;
}
</style>
