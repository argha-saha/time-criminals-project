<template>
  <!-- NAVIGATION BAR (DESKTOP & MOBILE) -->
  <header v-bind:style="[ phoneViewport ? { 'padding': '2rem' } : {} ]">
    <!-- Argha's Photos Text -->
    <router-link :style="{ color: logoColor || '#111' }" id='text-logo' to='/'>TC</router-link>

    <!-- Desktop Navigation -->
    <transition name="fade">
      <nav id='global-nav' v-show="!displayNav">
        <ul class='gn-items' v-show="!mobileViewport">
          <li id='gn-item gn-item-home'>
            <router-link 
              to='/' 
              class="gn-link" 
              @click="visiblePage = 'Home'" 
              id='gn-link-home'
            >
              Home
            </router-link>
          </li>
          <li id='gn-item gn-item-aircraft'>
            <router-link 
              to='/aircraft' 
              class="gn-link" 
              @click="visiblePage = 'Aircraft'" 
              id='gn-link-Aircraft'
            >
              Aircraft
            </router-link>
          </li>
          <li id='gn-item gn-item-technicaldocuments'>
            <router-link 
              to='/technicaldocuments' 
              class="gn-link" 
              @click="visiblePage = 'TechnicalDocuments'" 
              id='gn-link-technicaldocuments'
            >
              Technical Documents
            </router-link>
          </li>
          <!--
          <li id='gn-item gn-item-booking'>
            <router-link 
              to='/booking' 
              class="gn-link" 
              @click="visiblePage = 'Booking'" 
              id='gn-link-booking'
            >
              Booking
            </router-link>
          </li>
          <li id='gn-item gn-item-prints'>
            <router-link 
              to='/prints' 
              class="gn-link" 
              @click="visiblePage = 'Prints'" 
              id='gn-link-prints'
            >
              Prints
            </router-link>
          </li>
          -->
        </ul>
      </nav>
    </transition>

    <!-- Hamburger Menu Button -->
    <div 
      class="burger"
      @click="displayNav = !displayNav"
    >
      <div 
        class="line line-top"
        v-bind:style="[ displayNav ? { 'transform': 'translateY(1rem) rotate(-45deg)' } : {} ]">
      </div>
      <div 
        class="line line-middle"
        v-bind:style="[ displayNav ? { 'opacity': '0' } : {} ]">
      </div>
      <div 
        class="line line-bottom"
        v-bind:style="[ displayNav ? { 'transform': 'translateY(-1rem) rotate(45deg)' } : {} ]">
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <transition name="overlay-expand">
      <div class="overlay" v-show="displayNav">
        <transition name="fade-in-out" mode="in-out">
          <ul class="gn-items-mobile">
            <li 
              id='gn-item gn-item-home'
              @click="displayNav = !displayNav"
            >
              <router-link 
                to='/' 
                class="gn-link" 
                id='gn-link-home'
                @click="visiblePage = 'Home'"
                v-if="visiblePage !== 'Home'"
              >
                Home
              </router-link>
              <router-link 
                to='/' 
                class="gn-link" 
                id='gn-link-home-i'
                @click="visiblePage = 'Home'"
                v-if="visiblePage === 'Home'"
              >
                Home
              </router-link>
            </li>
            <li 
              id='gn-item gn-item-portrait'
              @click="displayNav = !displayNav"
            >
              <router-link 
                to='/aircraft' 
                class="gn-link" 
                id='gn-link-aircraft'
                @click="visiblePage = 'Aircraft'"
                v-if="visiblePage !== 'Aircraft'"
              >
                Aircraft
              </router-link>
              <router-link 
                to='/aircraft' 
                class="gn-link" 
                id='gn-link-aircraft-i'
                @click="visiblePage = 'Aircraft'"
                v-if="visiblePage === 'Aircraft'"
              >
                Aircraft
              </router-link>
            </li>
            <li 
              id='gn-item gn-item-clients'
              @click="displayNav = !displayNav"
            >
              <router-link 
                to='/technicaldocuments' 
                class="gn-link" 
                id='gn-link-technicaldocuments'
                @click="visiblePage = 'TechnicalDocuments'"
                v-if="visiblePage !== 'TechnicalDocuments'"
              >
                Technical Documents
              </router-link>
              <router-link 
                to='/technicaldocuments' 
                class="gn-link" 
                id='gn-link-technicaldocuments-i'
                @click="visiblePage = 'TechnicalDocuments'"
                v-if="visiblePage === 'TechnicalDocuments'"
              >
                Technical Documents
              </router-link>
            </li>
            <!--
            <li 
              id='gn-item gn-item-booking'
              @click="displayNav = !displayNav"
            >
              <router-link 
                to='/booking' 
                class="gn-link" 
                id='gn-link-booking'
                @click="visiblePage = 'Booking'"
                v-if="visiblePage !== 'Booking'"
              >
                Booking
              </router-link>
              <router-link 
                to='/booking' 
                class="gn-link" 
                id='gn-link-booking-i'
                @click="visiblePage = 'Booking'"
                v-if="visiblePage === 'Booking'"
              >
                Booking
              </router-link>
            </li>
            <li 
              id='gn-item gn-item-prints'
              @click="displayNav = !displayNav"
            >
              <router-link 
                to='/prints' 
                class="gn-link" 
                id='gn-link-prints'
                @click="visiblePage = 'Prints'"
                v-if="visiblePage !== 'Prints'"
              >
                Prints
              </router-link>
              <router-link 
                to='/prints' 
                class="gn-link" 
                id='gn-link-booking-i'
                @click="visiblePage = 'Prints'"
                v-if="visiblePage === 'Prints'"
              >
                Prints
              </router-link>
            </li>
            -->
          </ul>
        </transition>
      </div>   
    </transition>   
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
  props: [
    'logoColor',
    'bgColor',
    'linkColor'
  ],
  data: () => {
    return {
      mobileViewport: false,
      phoneViewport: false,
      displayNav: false,
      visiblePage: 'Home'
    }
  },
  methods: {
    handleViewport() {
      this.mobileViewport = window.innerWidth <= 1440
      window.addEventListener('resize', this.handleViewport)
    },
    handleMobileViewport() {
      this.phoneViewport = window.innerWidth <= 720
      window.addEventListener('resize', this.handleMobileViewport)
    },
    toggleNav() {
      this.toggleNav = !this.toggleNav
    },
    setPage(view) {
      this.visiblePage = view
    }
  },
  created() {
    this.handleViewport(),
    this.handleMobileViewport
  }
}
</script>

<style scoped>
header {
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: flex;
  -webkit-justify-content: flex-end;
  -moz-justify-content: flex-end;
  -o-justify-content: flex-end;
  -ms-justify-content: flex-end;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  padding: 4rem 10rem;

  background-color: rgba(20, 20, 20, 0);
}

#text-logo {
  font-family: "Bon Vivant Serif", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 6rem;
  letter-spacing: 0.05rem;
  text-decoration: none;

  margin-right: auto;

  cursor: pointer;
}

.gn-items, .gn-link {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  position: relative;
  margin: auto;
  z-index: 9996;

  color: #111;
}

.gn-items {
  position: relative;
  z-index: 9996;
    
  margin-right: 8rem;
}

.gn-items li {
  display: inline-flex;
  position: relative;
  z-index: 9996;

  margin: 0 4rem;
  cursor: pointer;
}

.gn-items li a {
  opacity: 1;
  position: relative;
  z-index: 9996;
    
  border-bottom-width: 50%;

  transition: all 0.25s ease 0s;
}

.gn-items li a:hover {
  animation: text-pulse 0.75s ease-in-out 0s infinite;
}

.burger {
  position: fixed;
  z-index: 9999;

  width: 4rem;
  height: 4rem;

  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: 0.5s ease-in-out 0s;

  cursor: pointer;
}

.burger div {
  display: block;
  cursor: pointer;

  height: 0.1rem;
  width: 100%;
    
  border-radius: 1rem;
  background: #111;
  mix-blend-mode: difference;
  opacity: 1;


  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
    
}

.burger .line-top {
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -o-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;

  margin-top: 1rem;
  transition: 0.5s ease-in-out 0s;
}

.active .burger .line-top {
  -webkit-transform: translateY(1rem) rotate(-45deg);
  -moz-transform: translateY(1rem) rotate(-45deg);
  -o-transform: translateY(1rem) rotate(-45deg);
  -ms-transform: translateY(1rem) rotate(-45deg);
  transform: translateY(1rem) rotate(-45deg);
}

.burger .line-middle {
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -o-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;

  margin-top: 0.9rem;
  transition: 0.25s ease-in-out 0.125s;
}

.active .burger .line-middle {
  opacity: 0;
}

.burger .line-bottom {
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -o-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;

  margin-top: 0.9rem;
  transition: 0.5s ease-in-out 0s;
}

.active .burger .line-bottom {
  -webkit-transform: translateY(-1rem) rotate(45deg);
  -moz-transform: translateY(-1rem) rotate(45deg);
  -o-transform: translateY(-1rem) rotate(45deg);
  -ms-transform: translateY(-1rem) rotate(45deg);
  transform: translateY(-1rem) rotate(45deg);
}

.overlay {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  transform: translateY(0%);

  transition: all 0.25s ease-in 0s;
}

.overlay li {
  list-style-type: none;
  padding: 2rem;
}

.overlay li a {
  font-family: "Lora", sans-serif;
  font-weight: 400;
  font-size: 6rem;
  color: #111;

  position: relative;

  background-size: 100% 0%;
  overflow: hidden;

  transition: all 0.25s ease-in-out 0s;
}

/*
.overlay li a::before,
.overlay li a::after {
  content: '';
  background: rgb(0,160,255);
  background: -webkit-linear-gradient(90deg, rgba(0,160,255,0.6) 0%, rgba(255,0,220,0.6) 100%);
  background: -moz-linear-gradient(90deg, rgba(0,160,255,0.6) 0%, rgba(255,0,220,0.6) 100%);
  background: -o-linear-gradient(90deg, rgba(0,160,255,0.6) 0%, rgba(255,0,220,0.6) 100%);
  background: linear-gradient(90deg, rgba(0,160,255,0.6) 0%, rgba(255,0,220,0.6) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00a0ff",endColorstr="#ff00dc",GradientType=1);

  position: absolute;
  z-index: -1;

  transition: all 0.25s ease-in-out 0s;
    
  height: 100%;
  width: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.overlay li a:hover::after {
  width: 100%;
}

#gmn-text-logo {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-size: 2rem;
  font-weight: 600;
}
*/

/* Mobile Navigation Overlay Transitions */
.overlay-expand-enter {
  transition: all 0.5s ease-in-out 0s;
  transform: translateY(100%);
}

.overlay-expand-enter-active {
  transform: translateY(100%);
  transition: all 0.5s ease-in-out -1s;
  overflow: hidden;
}

.overlay-expand-leave-to {
  transition: all 0.5s ease-in-out;
  transform: translateY(100%);
}

/* Mobile Navigation Overlay Animation Test (Not in Use) */
@keyframes slide-in {
  from {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  to {
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -o-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@keyframes slide-out {
  from {
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -o-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }
  to {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@keyframes text-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 1080px) {
  #text-logo {
    font-size: 4rem;
  }
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2rem;
  }
}
</style>