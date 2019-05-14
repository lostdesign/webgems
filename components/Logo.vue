<template lang="pug">
  .logo(@click="goToHome")
    img(src="~/assets/logo.svg")
    p webgems.io
</template>

<script>
export default {
  methods: {
    goToHome(){
      this.$router.push("/")
    }
  }
}
</script>


<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
  img {
    max-width:30px;
  }
  p {
    margin: 0 0 0 .3rem;
    font-size: 12px;
  }
}


</style>
