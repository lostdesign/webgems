<template lang="pug">
  Logo(ref="logo")
</template>

<script>
import Logo from '@/assets/images/logo.svg?inline';

export default {
  components: { Logo },
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
