<template>
  <NavigationBar />
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap');

@font-face {
  font-family: "BonVivant";
  src: local("BonVivant"),
    url(/fonts/BonVivant.otf) format("opentype");
}

@font-face {
  font-family: "BonVivantSerif";
  src: local("BonVivantSerif"),
    url(/fonts/BonVivantSerif.otf) format("opentype");
}

@font-face {
  font-family: "BonVivantSerifBold";
  src: local("BonVivantSerifBold"),
    url(/fonts/BonVivantSerifBold.otf) format("opentype");
}

@font-face {
  font-family: "BonVivantSVG";
  src: local("BonVivantSVG"),
    url(/fonts/BonVivantSVG.otf) format("opentype");
}

@font-face {
  font-family: "Dollyn";
  src: local("Dollyn"),
    url(/fonts/Dollyn.otf) format("opentype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
  overflow: hidden;
}

html, body {
  overflow-x: hidden;
}

html {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 10px;
  background-color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

#global-nav {
  z-index: 1000;
}

@viewport {
  width: device-width;
  zoom: 1.0;
}
</style>
