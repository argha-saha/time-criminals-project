<template>
  <div class="container">
    <div class="content">
      <!-- Text -->
      <div class="text">
        <h2>Concorde</h2>
        <h4>The concorde was the first ever supersonic jet for commercial use. Concorde is an ogival delta winged aircraft with four Olympus engines based on those employed in the RAF's Avro Vulcan strategic bomber. It is one of the few commercial aircraft to employ a tailless design.
            Key Stats:
            Top speed: 1,354mph;
            Cruise speed: 1,341mph;
            Range: 4,505mi.</h4>
      </div>
      <!-- Image -->
      <div class="image">
        <img src="https://cdn.vox-cdn.com/thumbor/laqP4mfPpiDIJLAMs9FVOtuG9V8=/0x0:1680x1120/1400x1050/filters:focal(0x0:1680x1120):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47217668/Concorde.0.0.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConcordeCard",
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