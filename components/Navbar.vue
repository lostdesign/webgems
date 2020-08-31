<template lang="pug">
  nav(class="py-4 md:py-6 lg:py-10")
    div(class="container mx-auto px-4 lg:px-8")
      div(class="flex justify-between items-center")
        div(class="flex flex-col items-center")
          div
            Logo
          div
            p(class="text-white font-serif font-medium lg:text-lg") webgems.io
        div
          a(
            class="text-white hover:text-white focus:text-white hover:text-opacity-75 focus:text-opacity-75"
            target="_blank"
            href="https://github.com/webgems/webgems"
          )
            GitHub
</template>

<script>
import GitHub from '@/assets/images/logo-github.svg?inline';

export default {
  components: { GitHub }
}
</script>
