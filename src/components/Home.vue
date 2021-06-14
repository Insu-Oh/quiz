// Home component
<template>
  <div>
    <!-- Main div tag start -->
    <div class="main">
      <!-- title -->
      <div class="title">{{ title }}</div>
      <!-- buttons -->
        <div class="buttons">
          <router-link to="/level" :class="{hover: $store.state.isEffect}">{{ startButton }}</router-link>
          <router-link to="/option" class="btn" :class="{hover: $store.state.isEffect}">{{ optionButton }}</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'National Flag Quiz',
      startButton: 'START',
      optionButton: 'OPTION'
    }
  },
  created() {
      switch(this.$store.state.Language) {
        case 'English':
          this.title = "National Flag Quiz"
          this.startButton = 'START'
          this.optionButton = 'OPTION'
          break;
        case 'Korean':
          this.title = "국기 퀴즈!"
          this.startButton = '시작'
          this.optionButton = '옵션'
          break;
      }
  }
}
</script>


