<template lang="pug">
div(class="lg:flex lg:justify-center lg:content-center")
  main.flex-col.max-w-md(class="lg:flex lg:justify-center lg:content-center")
    h1.text-black.font-bold.text-xl.mb-2 What &nbsp;
      span.text-teal webgems 💎&nbsp;
      | is you may ask?
    p.text-grey-darker.text-base.mb-8
      | As of now, it's a currated list of resources for developers and designers. If you want to suggest a resource, go ahead and contact me&nbsp;
      a(href="https://twitter.com/lostdesign") @lostdesign

    ul.list-reset.flex
      li.mr-6
        nuxt-link.text-blue(class='hover:text-blue-darker' to='/html') HTML
      li.mr-6
        nuxt-link.text-blue(class='hover:text-blue-darker' to='/css') CSS
      li.mr-6
        nuxt-link.text-blue(class='hover:text-blue-darker' to='/javascript') Javascript

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
}
</style>
