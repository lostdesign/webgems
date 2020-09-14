<template lang="pug">
  .flex
    Sidebar
    div(class="w-full lg:w-10/12 xl:w-full")
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
