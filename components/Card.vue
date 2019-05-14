<template lang="pug">
  .card(@click="goToSite(title,url)")
    p.card--title {{title}}
    .card--body
      p {{desc}}
      a(:href="url" :target='title' rel='noreferrer') Visit Website
</template>

<script>
export default {
  props: ['title', 'desc', 'url'],
  methods: {
    goToSite(title,url){
      window.open(url, title)
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  background: #2D3748;
  border-radius: .3rem;
  padding: 1rem;
  transition: .2s ease-in-out;

  &:hover {
    transform: scale(1.002);
    background: #008190;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(45, 55, 72, 0.1), 0 2px 4px -1px rgba(45, 55, 72, 0.06);

  }

  &--title {
    font-weight: 900;
    margin: 0;
  }

  &--body {
    display:flex;
    flex-direction: column;
    justify-content: space-between;

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
      align-self: flex-end;
    }
  }
}
</style>
