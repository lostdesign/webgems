<template lang="pug">
.welcome
  main
    h1.text-black.font-bold.text-xl.mb-2 What is &nbsp;
      span 💎 webgems ?
    p Webgems is a goto place for devs and designers to find new resources and more. As a beginner it's sometimes not easy to find what you need since you don't know what you should look for.
    p Therefore I created this project to have the most common and best resources for beginners and veterans in one place. Kinda like a bookmarks list for devs and designers, containing only the best gems out there.
    p If you want to add your own gem, go ahead and open a pull request on github (click on that octocat at the top right corner).&nbsp;
    p By the way, this project lives by getting shared, if you find this worthy please share it with others.
    p made with love by&nbsp;
        a(href="https://twitter.com/lostdesign") @lostdesign

</template>

<style lang="scss" scoped>
.welcome {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
main {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}

@media (max-width: 800px) {
  main {
    max-width: 90%;
  }
}
</style>

