// Selection component
<template>
  <div class="level">
    <!-- title -->
    <div class="title">Select your level</div>

    <!-- Level and quantity inputs -->
    <div class="inputs">
      <div>
        <label for="input2">QUANTITY</label>
        <input type="text" placeholder="1/50" id="input2" v-model="$store.state.maxQuantity"> 
      </div>
    </div>

    <!-- Enter buttons -->
    <div class="buttons">
    <router-link to="/quiz" :class="{hover: $store.state.isEffect}">START</router-link>
    <router-link to="/" :class="{hover: $store.state.isEffect}">BACK TO HOME</router-link>
    </div>
  </div>
</template>

<script>

export default ({

})
</script>
