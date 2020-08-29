<template>
  <div>
    <header class="py-10 xl:pt-16">
      <div class="container mx-auto px-4 lg:px-8">
        <h1 class="text-center text-white text-5xl md:text-6xl mb-6 xl:mb-10">webgems</h1>
        <div class="mb-10">
          <input type="search" placeholder="Search" class="block w-full md:max-w-md md:mx-auto lg:max-w-lg xl:max-w-2xl appearance-none bg-themeblue-400 font-medium text-white text-lg leading-tight rounded-xl shadow-lg focus:outline-none border-2 border-solid border-themeblue-300 placeholder-white py-2 md:py-3 px-3 md:px-6 xl:px-12">
        </div>
        <div class="md:text-center">
          <button
            class="inline-block bg-themeblue-600 rounded-xl shadow-lg font-medium text-white text-xs md:text-sm lg:text-base hover:bg-opacity-75 focus:bg-opacity-75 border-2 border-themeblue-200 focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 xl:px-5 py-2 cursor-pointer mr-4 md:mr-6 lg:mr-8 mb-4 md:mb-6 lg:mb-6 xl:mb-8 last:mr-0"
            v-for="(topic, index) in topics"
            :key="index"
            @click="$router.push({ path: topic.path })"
          >
            {{ topic.label }}
          </button>
        </div>
      </div>
    </header>

    <!-- <section></section> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        { label: "Accessibility", path: '/' },
        { label: "CSS", path: '/' },
        { label: "Daily", path: '/' },
        { label: "Design", path: '/' },
        { label: "Frontend", path: '/' },
        { label: "Fullstack", path: '/' },
        { label: "General", path: '/' },
        { label: "HTML", path: '/' },
        { label: "Icons", path: '/' },
        { label: "Javascript", path: '/' },
        { label: "PHP", path: '/' },
        { label: "Podcasts", path: '/' },
        { label: "Python", path: '/' },
        { label: "Ruby", path: '/' },
        { label: "Server", path: '/' },
        { label: "Utility", path: '/' },
        { label: "Utility", path: '/', special: true },
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @screen lg {
    font-size: 6rem;
  }
  @screen xl {
    font-size: 7rem;
  }
}
</style>