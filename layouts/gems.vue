<template lang="pug">
  .flex
    Sidebar
    .w-full
      Nav
      Nuxt
      Footer
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gray-100'
    }
  }
}
</script>
