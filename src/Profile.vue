<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
import "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
window.addEventListener('load',function(event){
  VANTA.WAVES({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  shininess: 31.00,
  waveHeight: 20.00,
  waveSpeed: 1.25,
  zoom: 0.83
  });
});
</script>

<template>
  <link rel="stylesheet" href="./src/assets/main.css">
  <link rel="icon" href="./src/assets/profile/un_tyson_192b.png"/>
  <header>
    <img alt="My face uwu" class="logo" src="./assets/profile/un_tyson_192b.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="楊大為"/>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
