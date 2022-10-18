<template>
  <div class="section section-animated bgimg">
    <div class="typewriter">
      <h1 id="message" class="title"></h1>
      <h1 id="message2" class="title second-line"></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    typeMessage(str, elem) {
      return new Promise(resolve => {
        const mHTML = elem;
        const currentStr = str;
        currentStr.split();
        let part = "";
        let currentLetter = 0;
        let int1 = setInterval(() => {
          if (!currentStr[currentLetter]) {
            clearInterval(int1);
            resolve();
          } else {
            part += currentStr[currentLetter++];
            mHTML.innerHTML = part;
          }
        }, 70);
      });
    }
  },
  mounted() {
    setTimeout(() => {
      let pr = this.typeMessage(
        "Software development",
        document.getElementById("message")
      );
      pr.then(() => {
        this.typeMessage("with heart.", document.getElementById("message2"));
      });
    }, 100 * 7);
  }
};
</script>

<style>
.typewriter h1 {
  font-size: 48px;
  color: white;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 25vh auto 2vh 6vw; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
}

.second-line {
  margin-top: 2vh !important;
}

.bgimg {
  width: 100vw;
  height: 110vh;
  background-image: url("../assets/banner_vertical_edited.jpeg");
  background-size: cover;

  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s; /* Firefox < 16 */
  -ms-animation: fadein 3s; /* Internet Explorer */
  -o-animation: fadein 3s; /* Opera < 12.1 */
  animation: fadein 3s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 1024px) {
  .typewriter h1 {
    font-size: 34px;
    color: white;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 25vh auto 2vh 6vw; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
  }

  .second-line {
    margin-top: 2vh !important;
  }

  .bgimg {
    width: 100vw;
    height: 110vh;
    background-image: url("../assets/banner_vertical_edited.jpeg");
    background-size: cover;

    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .typewriter h1 {
    font-size: 24px;
    color: white;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 25vh auto 2vh 6vw; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
  }

  .second-line {
    margin-top: 2vh !important;
  }

  .bgimg {
    width: 100vw;
    height: 110vh;
    background-image: url("../assets/banner_vertical_edited.jpeg");
    background-size: cover;

    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
  }
}
</style>
