// Option component
<template>
  <div class="options-section">
  <!-- title -->
  <div class="title">Options</div>

  <!-- Options, toggles, labels -->
  <!-- sound option -->
  <div class="options">
    <div class="sound">
      SOUND
      <label class="switch">
        <input type="checkbox" v-model="$store.state.isSound">
        <span class="slider"></span>
      </label>
    </div>
    
    <!-- effect option -->
    <div class="effect">
      EFFECT
      <label class="switch">
        <input type="checkbox" v-model="$store.state.isEffect">
        <span class="slider"></span>
      </label>
    </div>
  </div>
  <router-link to="/" :class="{hover: $store.state.isEffect}">BACK TO HOME</router-link>
</div>
</template>


