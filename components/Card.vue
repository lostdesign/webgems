<template lang="pug">
  .card
    .card--title
      p {{title}}
    .card--body
      p {{desc}}
      a(:href="url") {{url}}
</template>

<script>
export default {
  props: ['title', 'desc', 'url']
}
</script>


<style lang="scss" scoped>
.card {
  &--title {
    font-weight: 900;
    margin-bottom: .5rem;
  }

  &--body {
    p {
      font-size: 12px;
      color: #8795A1;
      margin-bottom: .5rem;
    }
    a {
     font-size: 9px;
     line-height: 1;
    }
  }
}
</style>
