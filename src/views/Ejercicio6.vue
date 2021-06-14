<template>
  <section class="container">
    <h1>Step Progress Bar</h1>
    <div class="progress-container">
      <div class="progress" id="progress" ref="progress"></div>

      <div class="circle active">
        <i class="fab fa-html5"></i>
      </div>
      <div class="circle">
        <i class="fab fa-css3-alt"></i>
      </div>
      <div class="circle">
        <i class="fab fa-js"></i>
      </div>
      <div class="circle">
        <i class="fab fa-react"></i>
      </div>
    </div>
    <button class="btn" id="prev" @click="prev" ref="prev">Prev</button>
    <button class="btn" id="next" @click="next" ref="next">Next</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currenActive: 1,
    };
  },
  methods: {
    next() {
      const circles = document.querySelectorAll(".circle");
      if (this.currenActive < circles.length) {
        this.currenActive++;
      }
      this.update();
    },
    prev() {
      if (this.currenActive > 1) {
        this.currenActive--;
      }
      this.update();
    },
    update() {
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle, index) => {
        if (index < this.currenActive) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
      const actives = document.querySelectorAll(".active")
      this.$refs.progress.style.width = ((actives.length-1)/(circles.length-1))*100 + '%';
      if(this.currenActive === 1){
        this.$refs.prev.disabled = true;
      }else if(this.currenActive === circles.length){
        this.$refs.next.disabled = true;
      }else{
        this.$refs.prev.disabled = false;
        this.$refs.next.disabled = false;
      }
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap");
:root {
  --line-border-fill: #9c27b0;
  --line-border-empty: #bdbdbd;
}
body {
  background-color: #fff;
  font-family: "Mulish", sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
h1 {
  color: #212121;
  margin-bottom: 90px;
}
.fa-html5 {
  font-size: 1.8rem;
  color: #ff5773;
}
.fa-css3-alt {
  font-size: 1.8rem;
  color: #264de4;
}
.fa-js {
  font-size: 1.6rem;
  color: #f7e018;
}
.fa-react {
  font-size: 1.8rem;
  color: #61dbfb;
}
.container {
  text-align: center;
}
.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}
.progress {
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}
.progress-container::before {
  content: "";
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
  transition: 0.4s ease;
}
.circle {
  background-color: #ffff;
  color: #999;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 3px solid #b2bec3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;
}

.circle.active {
  border-color: var(--line-border-fill);
}
.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}
.btn:focus {
  outline: 0;
}
.btn:active {
  transform: scale(0.97);
}
.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
</style>
