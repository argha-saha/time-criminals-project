<template>
  <div class="container">
    <div class="content">
      <h2><a href="https://docs.google.com/document/d/1VtF0sRlvZ0q-RTLM38Hq5M8jnjpuYMQN6D8xyN8Mdsg/edit?usp=sharing" target="_blank">🠖 Aircraft Descriptions</a></h2>
      <h2><a href="https://docs.google.com/document/d/1NWy3IxNxMq_VvzdFu8PBnqjwk-c05UM4SjdrOq8ibQI/edit?usp=sharing" target="_blank">🠖 Instructions for Flying</a></h2>
      <h2><a href="https://docs.google.com/document/d/1AqRCwag8ZN8qkpn91XWeq6M89Kpy6Gu2OCknBlzcOOQ/edit?usp=sharing" target="_blank">🠖 Flight Itinerary</a></h2>
      <h2><a href="https://docs.google.com/presentation/d/1h7LXkUMnU0hkGNmZQEnPzAPB5n-UhAIcpdEmeUL85lA/edit?usp=sharing" target="_blank">🠖 Flight Itinerary Map</a></h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}

.content h2 {
  font-size: 3rem;
  font-weight: 600;
  color: #05112b;
  padding: 3rem;
}

a {
  text-decoration: none;
  color: #05112b;

  transition: all 0.1s ease;
}

a:hover {
  text-decoration: underline;
  color: #113581;
}
</style>