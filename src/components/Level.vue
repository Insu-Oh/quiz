// Selection component
<template>
  <div class="level">
    <!-- title -->
    <div class="title">{{ title }}</div>

    <!-- Level and quantity inputs -->
    <div class="inputs">
      <div>
        <label for="input2">{{ quantityLabel }}</label>
        <input type="text" placeholder="1/50" id="input2" v-model="$store.state.maxQuantity"> 
      </div>
    </div>

    <!-- Enter buttons -->
    <div class="buttons">
    <router-link to="/quiz" :class="{hover: $store.state.isEffect}">{{ startButton }}</router-link>
    <router-link to="/" :class="{hover: $store.state.isEffect}">{{ homeButton }}</router-link>
    </div>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      title: 'select your level',
      quantityLabel: '',
      startButton: '',
      homeButton: '',
    }
},
created() {
    this.refreshName();
  },
  methods: {
    refreshName: function() {
      switch(this.$store.state.Language) {
        case 'English':
          this.title = 'Select your name'
          this.quantityLabel = 'QUANTITY'
          this.startButton = 'START'
          this.homeButton = 'BACK TO HOME'
          break;
        case 'Korean':
          this.title = '난이도를 선택 하세요!'
          this.quantityLabel = '갯수'
          this.startButton = '시작'
          this.homeButton = '홈으로 돌아가기'
          break;
      }
    }
  }
})
</script>
