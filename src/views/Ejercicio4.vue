<template>
  <div class="navigation">
    <h1 class="navigation-title">Tab Bar Navigation | JavaScript</h1>
    <div class="navigation-container">
      <div class="navigation-item active purple">
        <i class="navigation-icon fas fa-home"> </i>
        <p class="navigation-name">Home</p>
      </div>

      <div class="navigation-item pink">
        <i class="navigation-icon far fa-heart"> </i>
        <p class="navigation-name">Likes</p>
      </div>

      <div class="navigation-item yellow">
        <i class="navigation-icon fas fa-search"> </i>
        <p class="navigation-name">Search</p>
      </div>

      <div class="navigation-item teal">
        <i class="navigation-icon far fa-bell"></i>
        <p class="navigation-name">Notifications</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

.navigation {
  background-color: rgba(91, 55, 183, 1);
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background 0.4s linear;
  &-title {
    color: rgb(226, 226, 226);
    position: absolute;
    top: 20px;
  }
  &-container {
    background-color: rgb(226, 226, 226);
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 0.16), 0 3px 6px rgb(0, 0, 0, 0.16);
    display: flex;
    justify-content: space-between;
    padding: 30px;
    width: 450px;
  }
  &-item {
    background-color: rgb(226, 226, 226);
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin: 0 10px;
    transition: background 0.4s linear;
    &.active .navigation-name {
      padding: 10px 0;
      margin-left: 10px;
      max-width: 200px;
      transition: max-width 0.4s linear;
    }
    &.active.purple {
      background-color: rgb(91, 55, 183, 0.2);
      color: rgb(91, 55, 183, 1);
    }
    &.active.pink {
      background-color: rgba(201, 55, 157, 0.2);
      color: rgb(201, 55, 157, 1);
    }
    &.active.yellow {
      background-color: rgb(230, 169, 25, 0.2);
      color: rgb(230, 169, 25, 1);
    }
    &.active.teal {
      background-color: rgb(28, 150, 162, 0.2);
      color: rgb(28, 150, 162, 1);
    }
  }
  &-icon {
    font-size: 1.2em;
  }
  &-name {
    font-weight: bold;
    overflow: hidden;
    max-width: 0;
  }
}
</style>
