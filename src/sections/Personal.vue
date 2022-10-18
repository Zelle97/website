<template>
  <div class="section section-animated delayVisible">
    <div class="container">
      <span class="anchor" id="personal"></span>
      <div class="level personal">
        <div class="level-item">
          <figure class="image personal-image">
            <img class="is-rounded" src="../assets/personal.jpeg" />
          </figure>
        </div>
        <div class="container has-text-centered personal-text">
          <h1 class="title">
            {{ $t("personal.header") }}
          </h1>
          <h2 class="subtitle">
            <div class="content">
              {{ $t("personal.text") }}
            </div>
          </h2>
        </div>
      </div>
    </div>
    <div class="arrow-down">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Personal"
};
</script>

<style scoped>
.arrow-down {
  width: 60px;
  height: 40px;
  margin: 0 0 0 -30px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  animation: arrow 0.5s 1s infinite ease-out alternate;
}

.arrow-down:hover {
  animation-play-state: paused;
}

.left {
  position: absolute;
  height: 10px;
  width: 40px;
  background: black;
  transform: rotate(240deg);
  top: 10px;
  left: 10px;
  border-radius: 4px;
  transform-origin: 5px 50%;
  animation: leftArrow 0.5s 1s infinite ease-out alternate;
}

.right {
  position: absolute;
  height: 10px;
  width: 40px;
  background: black;
  transform: rotate(-60deg);
  top: 10px;
  left: 10px;
  border-radius: 4px;
  transform-origin: 5px 50%;
  animation: rightArrow 0.5s 1s infinite ease-out alternate;
}

@keyframes arrow {
  0% {
    bottom: 0px;
  }
  100% {
    bottom: 40px;
  }
}

@keyframes leftArrow {
  0% {
  }
  100% {
    transform: rotate(225deg);
  }
}

@keyframes rightArrow {
  0% {
  }
  100% {
    transform: rotate(-45deg);
  }
}

.personal {
  padding-top: 20vh;
}

.personal-image {
  max-width: 40vw;
}

.personal-text {
  max-width: 40vw;
}

@media only screen and (max-width: 800px) {
  .section-animated {
    margin-bottom: 15vh;
  }
  .personal-text {
    max-width: 60vw;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .section-animated {
    margin-bottom: 50vh;
  }
  .personal-text {
    max-width: 90vw;
  }
}
</style>
