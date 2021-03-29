<template>
  <div class="container">
    <div class="content">
      <!-- Text -->
      <div class="text">
        <h2>Lockheed Martin F-22 Raptor</h2>
        <h4>The F-22 Raptor is a single-seat, twin-engine, fifth generation stealth tactical fighter jet that was developed by Lockheed Martin Aeronautics. The aircraft is designed to be an air superiority fighter for air-to-air combat, but it harnesses other capabilities including advanced stealth, electronic warfare, ground attack, and signal intelligence. The purpose of developing the aircraft was to be dominant among other fighter aircraft by combining long-range weaponry with excellent speed, stealth, agility. The F-22 was chosen for its exemplary fighter capabilities within the time period (1980 to 2021).</h4>
      </div>
      <!-- Image -->
      <div class="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "F22Card",
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  margin-bottom: 10rem;
  margin-left: 10rem;
  margin-right: 10rem;
  width: auto;
  box-shadow: 1rem 1rem 2rem #444;
}

.content {
  background-color: #222;
  margin: 0 auto;
  padding: 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

.text {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

.image {
  margin: auto;
  width: 90%;
  padding: 1rem;
}

.image img {
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  height: auto;
  margin-right: 0px;
  margin-left: auto;
  width: 100%;
}

ul {
  list-style: none;
  text-decoration: none;
}

li {
  color: #eee;
  font-size: 1.6rem;
}

h2, h4, h6 {
  color: #eee;
}

h2 {
  font-size: 5rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
}

h4 {
  font-size: 2rem;
  font-weight: normal;
}

@media only screen and (max-width: 1080px) {
  h2 {
    font-size: 3rem;
  }
  
  h4 {
    font-size: 2rem;
  }

  li {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 980px) {
  .content {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 90vw;
  }
  .content {
    padding: 2rem;
    grid-gap: 2rem;
  }
  .image img {
    width: 100%;
  }
  h2 {
    font-size: 2.4rem;
  }
  
  h4 {
    font-size: 1.6rem;
  }

  li {
    font-size: 1rem;
  }
}
</style>