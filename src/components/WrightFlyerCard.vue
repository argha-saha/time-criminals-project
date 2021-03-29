<template>
  <div class="container">
    <div class="content">
      <!-- Text -->
      <div class="text">
        <h2>Wright Flyer III</h2>
        <h4>The Wright Flyer III is the third airplane created by the Wrights brothers in 1905. Flyer III had a new airframe and an upgraded engine with slightly larger cylinders, but it was essentially the same design and had the same marginal performance and instability as Flyers I and II. These shortcomings caused a major crash on 14 July 1905 that all but wrecked the airplane, but from which Orville emerged unscathed. Because of the crash, Flyer III had a large improvement in design making it a more stable aircraft. On 5 Oct 1905, Wilbur flew 24 miles in 39.5 minutes, longer than the total duration of all the flights of 1903 and 1904.</h4>
      </div>
      <!-- Image -->
      <div class="image">
        <img src="https://www.wright-brothers.org/Information_Desk/Just_the_Facts/Airplanes/Wright_Airplane_images/1905_Flyer_III/1905_Sept_29.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WrightFlyerIIICard",
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