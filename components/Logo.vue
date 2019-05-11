<template lang="pug">
  nuxt-link(to="/").logo
    img(src="~/assets/icons-1.png")
</template>


<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  padding: .2rem;
}
</style>
