<template lang="pug">
  tr.tableHead
    th.tableHead--title {{title}}
    th.tableHead--description {{desc}}
    th.tableHead--links {{url}}
</template>

<script>
export default {
  props: ["title", "desc", "url"],
};
</script>


<style lang="scss" scoped>
.tableHead {
  background: #2d3748;
  padding: 0.25rem;
  transition: 0.2s ease-in-out;
  width: 1fr;
  display: grid;
  grid-template-columns: minmax(150px, 2fr) 8fr 125px;

  &--title {
    color: #008190;
  }

  &--description {
    color: #008190;
    line-height: 1.3;
  }

  &--links {
    cursor: pointer;
    color: #008190;
  }
}
</style>
