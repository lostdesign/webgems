<template lang="pug">
  .card(:class="checkReference")
    //- a.card--link(:href="url" :target='title' rel='noreferrer')
    p.card--title {{title}}
    p.card--description {{desc}}
    div
      a.card--reference(@click='createCopyUrl') Copy reference
      br
      a(:href="url" :target='title' rel='noreferrer') Visit website
</template>

<script>
export default {
  props: ['title', 'desc', 'url'],
  data(){
    return {
      isReferenced: false,
    }
  },
  computed: {
    checkReference(){
      if(typeof this.$route.hash !== undefined) {
        const query = this.$route.hash.substring(1);
        const title = this.$props.title.replace(/ /g, '');

        return {
          'card--active': title.toLowerCase() === query
        }
      }
    },
  },
  methods:{
    createCopyUrl() {
      this.$router.push(`${this.$router.history.current.path}#${this.$props.title.replace(/ /g, '').toLowerCase()}`)
    }
  },
}
</script>


<style lang="scss" scoped>
.card {
  background: #2D3748;
  border-radius: .3rem;
  padding: 1rem;
  transition: .2s ease-in-out;
  display: flex;
  flex-direction: column;
  position: relative;

  &--active{
    border: 1px solid red !important;
  }

  &--reference {
    cursor: pointer;
  }

  &--link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  // &:hover {
  //   transform: scale(1.002);
  //   background: #008190;
  //   cursor: pointer;
  //   box-shadow: 0 4px 6px -1px rgba(45, 55, 72, 0.1), 0 2px 4px -1px rgba(45, 55, 72, 0.06);
  // }

  &--title {
    font-weight: 900;
    margin: 0;
  }

  &--description {
    display: flex;
    align-content: stretch;
    flex: 1 1 auto;
    flex-direction: column;
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
</style>
