// Option component
<template>
  <div class="options-section">
  <!-- title -->
  <div class="title">{{title}}</div>
  <!-- Options, toggles, labels -->
  <!-- sound option -->
  <div class="options">
    <div class="sound">
      {{ soundLabel }}
      <label class="switch">
        <input type="checkbox" v-model="$store.state.isSound">
        <span class="slider"></span>
      </label>
    </div>

    <!-- effect option -->
    <div class="effect">
      {{ effectLabel }}
      <label class="switch">
        <input type="checkbox" v-model="$store.state.isEffect">
        <span class="slider"></span>
      </label>
    </div>

    <div class="language">
      {{ LanguageLabel }} 
        <select v-model="$store.state.Language" @change="refreshName">
          <option v-for="option in languages" :key="option" :value="option" >
            {{ option }}
          </option>
        </select>
    </div>
  </div>
  <router-link to="/" :class="{hover: $store.state.isEffect}">{{ homeButton }}</router-link>
</div>
</template>

<script>

export default {
  data() {
    return {
      title: '옵션',
      soundLabel: '효과음',
      effectLabel: '이펙트',
      LanguageLabel: '언어',
      homeButton: '홈페이지로 돌아가기',
      languages: [
        'Korean',
        'English'
      ]
    }
  },
  created() {
    this.refreshName();
  },
  methods: {
    refreshName: function() {
      switch(this.$store.state.Language) {
        case 'English':
          this.title = 'Options'
          this.soundLabel = 'SOUND'
          this.effectLabel = 'EFFECT'
          this.LanguageLabel = 'LANGUAGE'
          this.homeButton = 'BACK TO HOME'
          break;
        case 'Korean':
          this.title = '옵션'
          this.soundLabel = '효과음'
          this.effectLabel = '이펙트'
          this.LanguageLabel = '언어'
          this.homeButton = '홈으로 돌아가기'
          break;
      }
    }
  }
}
</script>
