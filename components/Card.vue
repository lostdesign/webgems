<template lang="pug">
  .card
    .card--title
      p {{title}}
    .card--body
      p {{desc}}
      a(:href="url" target='_blank') Visit Website
</template>

<script>
export default {
  props: ['title', 'desc', 'url']
}
</script>


<style lang="scss" scoped>
.card {
  background: #2D3748;
  border-radius: .3rem;
  padding: 1rem;

  &--title {
    p{
      font-weight: 900;
      margin: 0;
    }
  }

  &--body {
    p {
      font-size: 13px;
      color: white;
      margin: 0 0 .7rem 0;
      line-height: 1.3;
      letter-spacing: .5px;
    }
    a {
     font-size: 12px;
     line-height: 1;
    }
  }
}
</style>
