<template>
  <div class="container">
    <div class="content">
      <!-- Text -->
      <div class="text">
        <h2>Boeing B-29 Superfortress</h2>
        <h4>The Boeing B-29 Superfortress is a strategic, high-altitude heavy bomber, which marked the peak of American-made bombers at the end of World War II. The B-29 was a mid-wing monoplane design centered around a tubular fuselage powered by four large air-cooled radial piston engines. Crew accommodations included 10 personnel made up of pilots, bombardiers, navigators, specialists and dedicated gunners. The B-29 needed to have a large range for long range operations in the Pacific Theatre, while still being able to carry increased payloads whilst operating at speeds nearing 400 miles per hour.</h4>
      </div>
      <!-- Image -->
      <div class="image">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/boeing-b-29-super-fortress-named-fifi-flying-over-a-desert-news-photo-1591386984.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "B29Card",
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