// Home component
<template>
  <div>
    <!-- Main div tag start -->
    <div class="main">
      <!-- title -->
      <div class="title">National Flag Quiz</div>
      <!-- buttons -->
        <div class="buttons">
          <router-link to="/level" :class="{hover: $store.state.isEffect}">START</router-link>
          <router-link to="/option" class="btn" :class="{hover: $store.state.isEffect}">OPTION</router-link>
        </div>
    </div>
  </div>
</template>


