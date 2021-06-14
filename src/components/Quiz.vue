// The main quiz component
<template>
  <div>
  <div class="quantity">{{ displayLevel }}</div> <!-- Displaying quantity -->
  <div class="pause" @click="settings.pause = !settings.pause"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg></div> <!-- Pause button -->

  <div class="quiz">
    <!-- Quiz box -->
    <div class="box">
      <transition name="x" :css="$store.state.isEffect" mode="out-in">
        <div class="xPopup" v-if="settings.isXshown" @click="settings.isXshown = false" >X</div>
      </transition>
      <h6>{{names.title}}</h6>
      <h2>{{ questions[settings.curQuestionNum].question }}</h2>

      <!-- Answers -->
      <transition name="flags" mode="out-in" :css="$store.state.isEffect">
        <div class="flags" :key="settings.curQuestionNum">
          <img id="img101" :src="questions[settings.curQuestionNum].img1" @click="checkAnswer">
          <img id="img102" :src="questions[settings.curQuestionNum].img2" @click="checkAnswer">
          <img id="img103" :src="questions[settings.curQuestionNum].img3" @click="checkAnswer">
          <img id="img104" :src="questions[settings.curQuestionNum].img4" @click="checkAnswer">
        </div>
      </transition>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button @click="displayPreviousQuestion" :class="{hover: $store.state.isEffect}">{{ names.previousButton }}</button>
      <button @click="displayNextQuestion" :class="{hover: $store.state.isEffect}">{{ names.nextButton }}</button>
    </div>
  </div>
  <div class="pauseField" v-if="settings.pause">
    <div class="box">
      <h2>{{ names.puaseTitle }}</h2>
      <button @click="settings.pause = !settings.pause" :class="{hover: $store.state.isEffect}">{{names.resumeButton}}</button>
      <router-link to="/option" :class="{hover: $store.state.isEffect}">{{names.optionButton}}</router-link>
      <router-link to="/" :class="{hover: $store.state.isEffect}">{{names.homeButton}}</router-link>
    </div>
  </div>

  <transition name="scoreboard">
    <div class="scoreBoard" v-if="scoreBoard.isShown">
      <div class="scoreBoardBox">
        <h2>{{names.scoreBoardTitle}}</h2>
          <p>{{names.wrongAnswers}} 
            <ul>
              <li v-for="name in scoreBoard.incorrectAnswers" :key="name">{{name}}</li>
            </ul>
            </p>
          <router-link to="/level" :class="{hover: $store.state.isEffect}">{{names.startagainButton}}</router-link>
          <router-link to="/" :class="{hover: $store.state.isEffect}">{{names.sHomeButton}}</router-link>
      </div>
    </div>
  </transition>

  </div>
</template>

<script>

export default {
  data() {
    return {
      names: {
        title: '',
        previousButton: '',
        nextButton: '',
        puaseTitle: '',
        resumeButton: '',
        optionButton: '',
        homeButton: '',
        scoreBoardTitle: '',
        wrongAnswers: '',
        startagainButton: '',
        sHomeButton: '',
      },
      scoreBoard: {
        isShown: false,
        incorrectAnswers: []
      },
      settings: {
        isXshown: false,
        pause: false,
        curQuestionNum: 1,
        sound: require('../assets/sound.mp3'),
      },
      questions: [],
      flags: [{
        index: 0,
        name: 'Australia',
        koreanName: '호주',
        img: require('../assets/flags/australia.png'),
        isDone: false
      },
      {
        index: 1,
        name: 'Brazil',
        koreanName: '브라질',
        img: require('../assets/flags/brazil.png'),
        isDone: false
      },
      {
        index: 2,
        name: 'Canada',
        koreanName: '캐나다',
        img: require('../assets/flags/canada.png'),
        isDone: false
      },
      {
        index: 3,
        name: 'China',
        koreanName: '중국',
        img: require('../assets/flags/china.png'),
        isDone: false
      },
      {
        index: 4,
        name: 'France',
        koreanName: '프랑스',
        img: require('../assets/flags/france.png'),
        isDone: false
      },
      {
        index: 5,
        name: 'Germany',
        koreanName: '독일',
        img: require('../assets/flags/germany.png'),
        isDone: false
      },
      {
        index: 6,
        name: 'India',
        koreanName: '인도',
        img: require('../assets/flags/india.png'),
        isDone: false
      },
      {
        index: 7,
        name: 'Italy',
        koreanName: '이탈리아',
        img: require('../assets/flags/italy.png'),
        isDone: false
      },
      {
        index: 8,
        name: 'Japan',
        koreanName: '일본',
        img: require('../assets/flags/japan.png'),
        isDone: false
      },
      {
        index: 9,
        name: 'Libya',
        koreanName: '리비아',
        img: require('../assets/flags/libya.png'),
        isDone: false
      },
      {
        index: 10,
        name: 'Mexico',
        koreanName: '맥시코',
        img: require('../assets/flags/mexico.png'),
        isDone: false
      },
      {
        index: 11,
        name: 'Mongolia',
        koreanName: '몽골',
        img: require('../assets/flags/mongolia.png'),
        isDone: false
      },
      {
        index: 12,
        name: 'Russia',
        koreanName: '러시아',
        img: require('../assets/flags/russia.png'),
        isDone: false
      },
      {
        index: 13,
        name: 'South Korea',
        koreanName: '대한민국',
        img: require('../assets/flags/south_korea.png'),
        isDone: false
      },
      {
        index: 14,
        name: 'Spain',
        koreanName: '스페인',
        img: require('../assets/flags/spain.png'),
        isDone: false
      },
      {
        index: 15,
        name: 'Turkey',
        koreanName: '터키',
        img: require('../assets/flags/turkey.png'),
        isDone: false
      },
      {
        index: 16,
        name: 'United Kingdom',
        koreanName: '영국',
        img: require('../assets/flags/united_kingdom.png'),
        isDone: false
      },
      {
        index: 17,
        name: 'United States',
        koreanName: '미국',
        img: require('../assets/flags/united_states.png'),
        isDone: false
      },
      {
        index: 18,
        name: 'Bangladesh',
        koreanName: '방글라데시',
        img: require('../assets/flags/bangladesh.png'),
        isDone: false
      },
      {
        index: 19,
        name: 'Vietnam',
        koreanName: '베트남',
        img: require('../assets/flags/vietnam.png'),
        isDone: false
      },
      {
        index: 20,
        name: 'Saudi Arabia',
        koreanName: '남아라비아 연방',
        img: require('../assets/flags/saudi_arabia.png'),
        isDone: false
      },
      {
        index: 21,
        name: 'Peru',
        koreanName: '페루',
        img: require('../assets/flags/peru.png'),
        isDone: false
      },
      {
        index: 22,
        name: 'Iraq',
        koreanName: '이라크',
        img: require('../assets/flags/iraq.png'),
        isDone: false
      },
      {
        index: 23,
        name: 'Philipinnes',
        koreanName: '필리핀',
        img: require('../assets/flags/philipinnes.png'),
        isDone: false
      },
      {
        index: 24,
        name: 'Israel',
        koreanName: '이스라엘',
        img: require('../assets/flags/israel.png'),
        isDone: false
      },
      {
        index: 25,
        name: 'Argentina',
        koreanName: '아르한티나',
        img: require('../assets/flags/argentina.png'),
        isDone: false
      },
      {
        index: 26,
        name: 'New Zealand',
        koreanName: '뉴질랜드',
        img: require('../assets/flags/new_zealand.png'),
        isDone: false
      },
      {
        index: 27,
        name: 'Portugal',
        koreanName: '포루투갈',
        img: require('../assets/flags/portugal.png'),
        isDone: false
      },
      {
        index: 28,
        name: 'Denmark',
        koreanName: '덴마크',
        img: require('../assets/flags/denmark.png'),
        isDone: false
      },
      {
        index: 29,
        name: 'Belgium',
        koreanName: '벨기에',
        img: require('../assets/flags/belgium.png'),
        isDone: false
      },
      {
        index: 30,
        name: 'Egypt',
        koreanName: '이집트',
        img: require('../assets/flags/egypt.png'),
        isDone: false
      },
      {
        index: 31,
        name: 'Thailand',
        koreanName: '태국',
        img: require('../assets/flags/thailand.png'),
        isDone: false
      },
      {
        index: 32,
        name: 'Chile',
        koreanName: '칠레',
        img: require('../assets/flags/chile.png'),
        isDone: false
      },
      {
        index: 33,
        name: 'Sweden',
        koreanName: '스웨덴',
        img: require('../assets/flags/sweden.png'),
        isDone: false
      },
      {
        index: 34,
        name: 'Cuba',
        koreanName: '쿠바',
        img: require('../assets/flags/cuba.png'),
        isDone: false
      },
      {
        index: 35,
        name: 'Norway',
        koreanName: '노르웨이',
        img: require('../assets/flags/norway.png'),
        isDone: false
      },
      {
        index: 36,
        name: 'Switzerland',
        koreanName: '스위스',
        img: require('../assets/flags/switzerland.png'),
        isDone: false
      },
      {
        index: 37,
        name: 'Netherlands',
        koreanName: '네덜란드',
        img: require('../assets/flags/netherlands.png'),
        isDone: false
      },
      {
        index: 38,
        name: 'Iran',
        koreanName: '이란',
        img: require('../assets/flags/iran.png'),
        isDone: false
      },
      {
        index: 39,
        name: 'Greece',
        koreanName: '그리스',
        img: require('../assets/flags/greece.png'),
        isDone: false
      },
      {
        index: 40,
        name: 'Colombia',
        koreanName: '콜롬비아',
        img: require('../assets/flags/colombia.png'),
        isDone: false
      },
      {
        index: 41,
        name: 'Poland',
        koreanName: '폴란드',
        img: require('../assets/flags/poland.png'),
        isDone: false
      },
      {
        index: 42,
        name: 'South Sudan',
        koreanName: '남수단',
        img: require('../assets/flags/south_sudan.png'),
        isDone: false
      },
      {
        index: 43,
        name: 'Sudan',
        koreanName: '수단',
        img: require('../assets/flags/sudan.png'),
        isDone: false
      },
      {
        index: 44,
        name: 'Estonia',
        koreanName: '에스토니아',
        img: require('../assets/flags/estonia.png'),
        isDone: false
      },
      {
        index: 45,
        name: 'Kazakhstan',
        koreanName: '카자흐스탄',
        img: require('../assets/flags/kazakhstan.png'),
        isDone: false
      },
      {
        index: 46,
        name: 'Malaysia',
        koreanName: '말레이시아',
        img: require('../assets/flags/malaysia.png'),
        isDone: false
      },
      {
        index: 47,
        name: 'Pakistan',
        koreanName: '파키스탄',
        img: require('../assets/flags/pakistan.png'),
        isDone: false
      },
      {
        index: 48,
        name: 'Indonesia',
        koreanName: '인도네시아',
        img: require('../assets/flags/indonesia.png'),
        isDone: false
      },
      {
        index: 49,
        name: 'Singapore',
        koreanName: '싱가포르',
        img: require('../assets/flags/singapore.png'),
        isDone: false
      },
      {
        index: 50,
        name: 'Nepal',
        koreanName: '네팔',
        img: require('../assets/flags/nepal.png'),
        isDone: false
      },
      {
        index: 51,
        name: 'Palau',
        koreanName: '팔라우',
        img: require('../assets/flags/palau.png'),
        isDone: false
      },
      {
        index: 52,
        name: 'Panama',
        koreanName: '파나마',
        img: require('../assets/flags/panama.png'),
        isDone: false
      },
      {
        index: 53,
        name: 'North Korea',
        koreanName: '북한',
        img: require('../assets/flags/north_korea.png'),
        isDone: false
      },
      {
        index: 54,
        name: 'South Africa',
        koreanName: '남아프리카',
        img: require('../assets/flags/south_africa.png'),
        isDone: false
      },
      {
        index: 55,
        name: 'Morocco',
        koreanName: '모르코',
        img: require('../assets/flags/morocco.png'),
        isDone: false
      },
      ]
    }
  },
  created() {
    this.refreshName();
    for(var i = 0; i <= this.$store.state.maxQuantity; i++) {
      this.newQuiz();
    }
  },
  computed: {
    displayLevel: function() {
      return this.settings.curQuestionNum + '/' + this.$store.state.maxQuantity
    },
  
  },
  methods:{
    refreshName: function() {
      switch(this.$store.state.Language) {
        case 'English':
          this.names.title = 'Choose proper flag!'
          this.names.previousButton = 'PREVIOUS'
          this.names.nextButton = 'NEXT'
          this.names.puaseTitle = 'PAUSE'
          this.names.resumeButton = 'RESUME'
          this.names.optionButton = 'OPTION'
          this.names.homeButton = 'HOME'
          this.names.scoreBoardTitle = 'You have finished all questions!'
          this.names.wrongAnswers = 'Your incorrect answers'
          this.names.startagainButton = 'START AGAIN'
          this.names.sHomeButton = 'BACK TO HOME'
          break;
        case 'Korean':
          this.names.title = '올바른 국기를 선택하세요!'
          this.names.previousButton = '이전문제'
          this.names.nextButton = '다음문제'
          this.names.puaseTitle = '일시정지'
          this.names.resumeButton = '재게하기'
          this.names.optionButton = '옵션'
          this.names.homeButton = '홈으로 가기'
           this.names.scoreBoardTitle = '모든 문제를 끝냈습니다!'
          this.names.wrongAnswers = '당신이 틀린 문제'
          this.names.startagainButton = '다시 시작하기'
          this.names.sHomeButton = '홈으로 돌아가기'
          break;
        case 'Japanese':
          this.names.title = '正しい国旗を選択してください！'
          this.names.previousButton = '移転問題'
          this.names.nextButton = '次の問題'
          this.names.puaseTitle = '一時停止'
          this.names.resumeButton = '寝かしつける'
          this.names.optionButton = 'オプション'
          this.names.homeButton = 'ホームに行くこと'
           this.names.scoreBoardTitle = 'すべての問題を終わらせました。'
          this.names.wrongAnswers = 'あなたの間違い'
          this.names.startagainButton = 'やりなおす'
          this.names.sHomeButton = 'ホームに戻る'
          break;
      }
    },
    checkAnswer: function(event) {
      //put the targeted button id inside of variable.
      var targetedId = event.srcElement.id;
      // if the user hasn't done
      if(this.settings.curQuestionNum < this.$store.state.maxQuantity) {
        // if the user click on the right answer
        if(targetedId === this.questions[this.settings.curQuestionNum].answer) {
          this.settings.curQuestionNum++
          this.audio();
        } else {
          // if the user click on the worng answer
          this.settings.isXshown = true;
          //put incorrect flag's name into scoreBoard's incorrectAnswers
          let incorrectName = this.questions[this.settings.curQuestionNum].question;
          this.scoreBoard.incorrectAnswers.push(incorrectName);
          this.settings.curQuestionNum++; 
        }
      } else {
        // if the quiz is finished
        this.scoreBoard.isShown = true;
      }
    },
    // go to next question
    displayNextQuestion: function(){
      if(this.settings.curQuestionNum < this.$store.state.maxQuantity) {
        this.settings.curQuestionNum++
      }
    },
    // go to previous question
    displayPreviousQuestion: function(){
      if(this.settings.curQuestionNum > 0) {
        this.settings.curQuestionNum--
      }
    },

    // creating question
    newQuiz: function() {
      // randomize one answer flag
      let chosenIndex = Math.floor(Math.random() * this.flags.length);
      let chosenArray = this.flags[chosenIndex];
      while(this.flags[chosenIndex].isDone == true) {
        chosenIndex = Math.floor(Math.random() * this.flags.length);
        chosenArray = this.flags[chosenIndex];
      } 
      this.flags[chosenIndex].isDone = true;

      //make a clone of the flag array 
      var cloneArray = this.flags.slice();

      //choose the number of answer
      let answerNum = Math.floor(Math.random() * 3 + 1);

      let pos;
      
      // Pick one img and exclude it from the capable flags for 4 times
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(chosenArray.name);
      cloneArray.splice(pos, 1);

      let img1 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img1.name);
      cloneArray.splice(pos, 1);

      let img2 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img2.name);
      cloneArray.splice(pos, 1);

      let img3 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img3.name);
      cloneArray.splice(pos, 1);

      let img4 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img4.name);
      cloneArray.splice(pos, 1);
      
      let q = (this.$store.state.Language == 'English') ? chosenArray.name : (this.$store.state.Language == 'Korean') ? chosenArray.koreanName : (this.$store.state.Language == 'Japanese') ? chosenArray.koreanName : '';

      // based on the position number, it assign the images
      switch(answerNum) {
        case 1:
          this.questions.push({
            question: q,
            answer: `img10${answerNum}`,
            img1: chosenArray.img,
            img2: img2.img,
            img3: img3.img,
            img4: img4.img,
          });
          break;
        case 2:
          this.questions.push({
            question: q,
            answer: `img10${answerNum}`,
            img1: img1.img,
            img2: chosenArray.img,
            img3: img3.img,
            img4: img4.img,
          });
          break;
        case 3:
          this.questions.push({
            question: q,
            answer: `img10${answerNum}`,
            img1: img1.img,
            img2: img2.img,
            img3: chosenArray.img,
            img4: img4.img,
          });
          break;
        case 4:
          this.questions.push({
            question: q,
            answer: `img10${answerNum}`,
            img1: img1.img,
            img2: img2.img,
            img3: img3.img,
            img4: chosenArray.img,
          });
          break;
      }
    },
    // play an audio
    audio: function() {
      if(this.$store.state.isSound == true) {
      var sound = new Audio(this.settings.sound);
      sound.play();
      }
    }
  }
}
</script>
