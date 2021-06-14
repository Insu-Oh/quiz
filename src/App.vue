// The parent component
<template>
  <div id="app">
    <transition name="fade" mode="out-in" :css="$store.state.isEffect">
      <router-view/>
    </transition>
  </div>
</template>

// All CSS
<style>
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@300;400&display=swap');

html,
body {
  margin: 0;
  padding: 0; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'KoHo', sans-serif;
  color: white;
  letter-spacing: -1px;
  z-index: -2;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    135deg,
    #7ff4ae,
    #f2de7d,
    #ffc489,
    #ff6b97,
    #6bc3ff
  );
  background-size: 200% 200%;
  position: relative;
  animation: change 6s ease-in-out alternate infinite;
}


/* To make transparent background, I added after attribute as a background. This opacity is 0.7. */
@keyframes change {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 100% 100%;
  }
}

ul, li {
  list-style-type: none;
}
/* Make .main center */
.main {
  display: block;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 70px 140px;
  justify-content: center;
  text-align: center;
  color: #5a5a5a;
}

button {
  border: none;
}

/* Bigger font size and resize the title */
.main .title {
  /* main's title*/
  position: relative;
  font-size: 3rem;
  font-weight: 700;
  color: #5a5a5a;
  padding: 40px;
}

/*  */
/* Every button's desgin */
button,
a,
.buttons button {
  text-decoration: none;
  font-size: 30px;
  margin: 10px;
  color: black;
  font-family: 'KoHo', sans-serif;
  background-color: Transparent;
  cursor: pointer;
}

.hover:hover {
  font-weight: bolder;
  font-size: 40px;
  transition: font-size 0.5s;
}

.hover:not(hover){
  font-weight: normal;
  font-size: 30px;
  transition: font-size 0.3s;
}

.level {
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 600px;
  height: 300px;
  padding: 30px 70px;
}

/* Give border and bigger size of font and padding */
.level .title {
  position: relative;
  font-size: 3rem;
  padding: 35px 80px;
  color: #5a5a5a;
}

/* Make the inputs' components center*/
.level .inputs {
  margin: 20px;
  display: block;
  text-align: center;
  color: #5a5a5a;
  font-size: 1.5rem;
}

input {
  padding: 5px 15px;
}

/* Give margin to inputs' div */
.level .inputs div {
  margin: 25px;
}

/* Give bigger width, left margin, and left padding */
.level .inputs input {
  width: 50px;
  margin-left: 15px;
  padding-left: 10px;
}

/* Selecting section's button bigger width*/
/* Class buttons' button bigger width */

.level .buttons {
  margin: 0;
  padding: 0;
  width: auto;
  text-align: center;
}

/* The whole of quiz section is 700 pixel of width and center */
.quiz {
  width: 700px;
  text-align: center;
  display: block;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 30px 70px;
  justify-content: center;
  text-align: center;
  color: #5a5a5a;
}

.quiz h6 {
  font-size: 30px;
  margin: 0;
}

/* Give proper width and height*/
.quiz .flags img {
  width: 90px;
  height: 60px;
  cursor: pointer;
  margin: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
}

/* Pause section's black background by using 0.8 opacity in RGBA */

/* Align the text center */
.options-section {
  text-align: center;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 600px;
  height: 400px;
  padding: 30px 70px;
  color: #5a5a5a;
}

/* Desgin the title */
.options-section .title {
  position: relative;
  font-size: 3rem;
  padding: 35px 80px;
}

/* Give margin to option class */
.options-section .options {
  margin: 50px;
  font-size: 25px;
}

.options div {
  margin: 10px;
}

/* Toggle switch container */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Input switch */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The background of toggle button */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

/* The rounded button for toggle switch */
.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

/* toggle CSS  */
input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


/* The text to display quantity */
.quantity {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
  margin: 15px;
}

/* Pause button */
.pause svg {
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  width: 30px;
  height: 30px;
  fill: white;
  cursor: pointer;
}

/* Puase section */
.pauseField {
  color: #5a5a5a;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.pauseField .box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.7);
  color: #5a5a5a;
}

.pauseField .box h2 {
  font-size: 50px;
}

/* Transition for routing and scoreboard */
.fade-enter {
  transform: translateY(100px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-active {
  transition: all 0.3s ease cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-leave-to {
  opacity: 0;
}

.scoreBoard {
  color: #5a5a5a;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}

.scoreBoard .scoreBoardBox {
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.7);
  height: min-content;
  width: 600px;
  font-size: 25px;
}

.scoreBoard .scoreBoardBox h2 {
  text-align: center;
}

.scoreBoard .scoreBoardBox ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap ;
}

.scoreBoard .scoreBoardBox ul li {
  flex: 1 0 33%; 
}

.scoreBoard .scoreBoardBox ul img {
  width: 50px;
  height: 30px;
}

/* Scoreboard transition */
.scoreboard-enter {
  opacity: 0;
}

.scoreboard-enter-active {
  transition: all 1s ease;
}

.scoreboard-leave-active {
  transition: all 0.3s ease;
  }

.scoreboard-leave-to {
  opacity: 0;
}

/* flags transition everytime when the new quiz appears */
.flags-enter {
  transform: translateX(100px);
  opacity: 0;
}

.flags-enter-active {
  transition: all 1s ease;
}

.flags-leave-active {
  transition: all 0.3s ease cubic-bezier(1, 0.5, 0.8, 1);
}

.flags-leave-to {
  opacity: 0;
}

/* X popup */
.xPopup {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 200px;
  font-weight: 600;
  color: rgb(193, 40, 40);
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  z-index: 2;
}

/* X transition */
.x-enter-active {
  animation: bounce-in 0.5s;
}
.x-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.20);
  }
  100% {
    transform: scale(1);
  }
}


</style>

<script>

</script>
