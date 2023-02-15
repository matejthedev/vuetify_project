<template>
  <div class="about pa-6">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Excepturi et est facere commodi perferendis ipsa error voluptatibus soluta alias adipisci, 
      inventore ducimus sed accusantium maxime ipsam suscipit illum quidem vero reiciendis assumenda 
      ipsum! Maxime veritatis magnam, aliquam recusandae quo asperiores magni minima? 
      Minus velit veritatis, neque laudantium at illum quasi?
    </p>
    <p class="">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Excepturi et est facere commodi perferendis ipsa error voluptatibus soluta alias adipisci, 
      inventore ducimus sed accusantium maxime ipsam suscipit illum quidem vero reiciendis assumenda 
      ipsum! Maxime veritatis magnam, aliquam recusandae quo asperiores magni minima? 
      Minus velit veritatis, neque laudantium at illum quasi?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Excepturi et est facere commodi perferendis ipsa error voluptatibus soluta alias adipisci, 
      inventore ducimus sed accusantium maxime ipsam suscipit illum quidem vero reiciendis assumenda 
      ipsum! Maxime veritatis magnam, aliquam recusandae quo asperiores magni minima? 
      Minus velit veritatis, neque laudantium at illum quasi?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Excepturi et est facere commodi perferendis ipsa error voluptatibus soluta alias adipisci, 
      inventore ducimus sed accusantium maxime ipsam suscipit illum quidem vero reiciendis assumenda 
      ipsum! Maxime veritatis magnam, aliquam recusandae quo asperiores magni minima? 
      Minus velit veritatis, neque laudantium at illum quasi?
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    color() {
      console.log(this.$vuetify.breakpoint.name)
      return this.$vuetify.breakpoint.name === 'xs' ? 'gray' : 'black'
    }
  }
}
</script>

<style lang="scss">
$color: v-bind(color);
.about {
  color: $color;
}
</style>
