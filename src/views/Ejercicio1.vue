<template>
  <section class="container">
    <h1 class="container-title">Web &lt;Dev/&gt;</h1>
    <h2 class="container-subtitle">Pills</h2>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  background: $bunting;
  &-title {
    color: #fff;
    animation: enterAnimation 2s ease-in-out forwards;
    animation-delay: 1s;
    opacity: 0.1;
    letter-spacing: 7px;
    font-size: 4.5em;
    line-height: 1.5em;
    text-align: center;
  }
  &-subtitle {
    color: $flushOrange;
    letter-spacing: 7px;
    font-size: 4em;
    height: 0;
    overflow: hidden;
    animation: pillsAnimation 1s forwards;
    animation-delay: 3s;
  }
}
</style>
