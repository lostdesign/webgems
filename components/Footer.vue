<template lang="pug">
  footer(class="bg-white py-10 md:py-10 lg:py-16 xl:py-20")
    div(class="container mx-auto px-4 lg:px-8")
      div(class="flex flex-wrap md:justify-between md:items-end text-sm")
        div(class="mb-4 md:mb-0")
          p.font-bold.mb-4
            span Made with
            |
            |
            Heart.inline-block.align-middle.mb-1
            |
            |
            span by
          p.font-mono.font-bold class <a href="https://twitter.com/lostdesign">@lostdesign</a> extends <a href="https://github.com/S3B4S">@S3B4S</a> and <a href="https://devcord.com/">Devcord</a>
        .legal-pb
          a(class="font-bold" href="https://lost.design/legal") Legal Notice
</template>

<script>
import Heart from '@/assets/images/heart.svg?inline';

export default {
  components: { Heart }
}
</script>

<style scoped>
.legal-pb {
  padding-bottom: 0.15rem;
}
</style>