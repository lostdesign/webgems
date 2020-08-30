<template lang="pug">
  nav(class="py-4 md:py-6 lg:py-10")
    div(class="container mx-auto px-4 lg:px-8")
      div(class="flex justify-between items-center")
        div(class="flex flex-col items-center")
          div
            Logo(ref="logo")
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
import Logo from '@/assets/images/logo.svg?inline';
import GitHub from '@/assets/images/logo-github.svg?inline';

export default {
  components: { Logo, GitHub },
  mounted() {
    this.sparkle();
  },
  methods: {
    sparkle() {
      const svg = this.$refs.logo;
      const paths = this.$refs.logo.childNodes;
      const number_of_paths = paths.length;
      const chosen_path = paths[Math.floor(number_of_paths*Math.random())]
      chosen_path.classList.remove('sparkle')
      chosen_path.classList.add('sparkle')
      setTimeout(this.sparkle,2000*Math.random())
    }
  }
}
</script>

<style scoped>
.sparkle {
	animation: sparkle 1000ms;
}
@keyframes sparkle {
	0% {
		fill: white;
	}
	100% {
		fill: auto;
	}
}
</style>
