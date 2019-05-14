<template lang="pug">
  nuxt-link(to="/").logo
    img(src="~/assets/logo.svg")
</template>


<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
}
img {
  padding: .2rem;
}
</style>
