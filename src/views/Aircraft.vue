<template>
  <div class="container">
    <div class="cards">
      <WrightFlyerCard />
      <SpiritOfStLouisCard />
      <B29Card />
      <ConcordeCard />
      <F22Card />
      <ProgressEagleCard />
    </div>
  </div>
</template>

<script>
import WrightFlyerCard from '@/components/WrightFlyerCard.vue'
import SpiritOfStLouisCard from '@/components/SpiritOfStLouisCard.vue'
import B29Card from '@/components/B29Card.vue'
import ConcordeCard from '@/components/ConcordeCard.vue'
import F22Card from '@/components/F22Card.vue'
import ProgressEagleCard from '@/components/ProgressEagleCard.vue'

export default {
  components: {
    WrightFlyerCard,
    SpiritOfStLouisCard,
    B29Card,
    ConcordeCard,
    F22Card,
    ProgressEagleCard
  }
}
</script>

<style scoped>
.cards {
  margin-top: 16rem;
}

@media only screen and (max-width: 600px) {
  .cards {
    margin-top: 8rem;
  }
}
</style>