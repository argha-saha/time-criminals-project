<template>
  <div class="container">
    <section class="hs-1">
      <img src="../images/TimeCriminals.png" class="hs1-img">
    </section>
    <section class="hs-2">
      
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hs-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hs1-img {
  margin-top: 16rem;
  margin-bottom: 16rem;
  width: 80vw;
}

.hs-2 {
  width: 100vw;
  height: 100vh;
  background-color: #faedd6;
}

@media only screen and (max-width: 900px) {
  .hs1-img {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
}

@media only screen and (max-width: 600px) {
  .hs1-img {
    margin-top: 8rem;
    margin-bottom: 4rem;
  }
}
</style>