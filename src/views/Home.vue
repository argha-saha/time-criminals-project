<template>
  <div class="container">
    <section class="hs-1">
      <img src="../images/TimeCriminals.png" class="hs1-img">
    </section>

    <section class="hs-2">
      <img src="../images/MissionSelection.png" class="hs1-img">
    </section>

    <section class="hs-3">
      <div class="hs3-text">
        <h2>STORYLINE</h2>
        <br>
        <br>
        <h4>As a criminal being chased by the cops, you travel back in time to avoid being punished for your crimes. You go back further than expected and keep changing time periods with no control over it.</h4>
        <br>
        <br>
        <h4>To fix your time-traveling watch, you must go back to when the watch was discovered.</h4>
        <br>
        <br>
        <h4>As you find and steal items from the different time periods you are transported to, you gain more control over time travel. You must hurry though, cause the cops are right on your heels!</h4>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ccc;
}

.hs-3 {
  width: 100vw;
  height: 100vh;
  background-color: #ecf6ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hs3-text {
  width: 80%;
}

.hs-3 h2 {
  font-size: 4rem;
}

.hs-3 h4 {
  font-size: 3rem;
  font-weight: normal;
}

@media only screen and (max-width: 900px) {
  .hs1-img {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }

  .hs-3 h2 {
    font-size: 3rem;
  }

  .hs-3 h4 {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 600px) {
  .hs1-img {
    margin-top: 8rem;
    margin-bottom: 4rem;
  }
}
</style>