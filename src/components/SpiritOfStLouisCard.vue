<template>
  <div class="container">
    <div class="content">
      <!-- Text -->
      <div class="text">
        <h2>Spirit of St. Louis</h2>
        <h4>The Spirit of St. Louis made the first nonstop solo flight across the Atlantic Ocean. Charles A. Lindbergh flew this plane from Long Island, New York, to Le Bourget, near Paris on May 20th-21st, 1927. This custom-built, single-engine, single-seat, high-wing monoplane was chosen simply for its historical importance: it had an undeniable legacy on the face of aviation history, and its achievement is iconic to the era. Additionally, it is revolutionary in its ability to fly long distance. Because this aircraft was designed with the singular goal of getting to Paris, it is the optimal plane from the era to take this journey transatlantic!</h4>
      </div>
      <!-- Image -->
      <div class="image">
        <img src="https://www.gannett-cdn.com/experiments/usatoday/responsive/2017/05-spirit-of-st-louis/images/social-share-sosl.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpiritOfStLouisCard",
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