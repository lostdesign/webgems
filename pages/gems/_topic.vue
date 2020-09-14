<template lang="pug">
  div
    header(class="pt-10 pb-0 lg:pt-12")
      div(class="container mx-auto px-4 lg:px-8")
        div(class="flex justify-between items-center flex-wrap md:flex-no-wrap")
          div(class="w-full md:w-auto")
            h1(class="font-sans font-bold text-3xl lg:text-4xl") Accessibility
          div(class="w-full md:w-auto")
            p(class="text-gray-700 lg:text-sm") <b>{{ gems.length }}</b> <i>Gems</i>

    section(class="py-10 lg:py-12")
      div(class="container mx-auto px-4 lg:px-8")
        masonry(
          :cols="{default: 4, 1439: 3, 1023: 2, 767: 1}"
          :gutter="32"
        )
          div(v-for="(gem, index) in gems" :key="index")
            div(class="shadow-card mb-8" :class="index === gems.length - 1 || index === 1 ? 'is-active' : 'rounded-xl'")
              div(class="rounded-xl bg-white p-6 md:p-8 lg:p-5")
                .flex.items-start.mb-4
                  div.mr-2(style="width: 16px;margin-top: .4rem")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + gem.url" aria-hidden="true")
                  div
                    h2(class="font-sans text-lg break-words mb-0") {{ gem.title }}
                .mb-5
                  p {{ gem.desc }}
                div(class="flex -mx-3 md:-mx-4 lg:-mx-3")
                  div(class="w-1/2 px-3 md:px-4 lg:px-3")
                    button(
                      class="block w-full bg-themeblue-600 transform scale-100 hover:scale-97 transition-transform duration-75 ease-linear rounded-card font-medium text-white text-xs md:text-sm lg:text-xs hover:bg-opacity-95 focus:bg-opacity-95 focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 xl:px-5 cursor-pointer"
                    )
                      .flex.items-center.justify-center
                        .mr-2
                          Copy.h-4.w-4
                        div
                          span Copy
                  div(class="w-1/2 px-3 md:px-4 lg:px-3")
                    a(
                      class="block w-full bg-themeblue-600 transform scale-100 hover:scale-97 transition-transform duration-75 ease-linear rounded-card font-medium text-white hover:text-white focus:text-white no-underline hover:no-underline text-xs md:text-sm lg:text-xs hover:bg-opacity-95 focus:bg-opacity-95 focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 xl:px-5 cursor-pointer"
                      :href="gem.url"
                      rel='noreferrer'
                      target="_blank"
                    )
                      .flex.items-center.justify-center
                        .mr-2
                          Link.h-4.w-4
                        div
                          span Open
</template>

<script>
import Copy from '@/assets/images/copy.svg?inline';
import Link from '@/assets/images/link.svg?inline';

export default {
  layout: 'gems',
  components: { Copy, Link },
  data() {
    return {
      gems: [
        {
          "title": "CSS Grid Generator",
          "desc": "Visually create your css grid and export the code.",
          "url": "https://cssgrid-generator.netlify.com/",
          "tags": ["generator", "grid", "layout", "visual tool"]
        },
        {
          "title": "Keyframes Editor",
          "desc": "An insanely simple way to create CSS animations",
          "url": "https://keyframes.app/editor/",
          "tags": ["generator", "animation", "visual tool"]
        },
        {
          "title": "Flexbox Froggy",
          "desc": "A game to learn Flexbox",
          "url": "https://flexboxfroggy.com",
          "tags": ["educational", "beginner", "interactive"]
        },
        {
          "title": "Flexbox Zombies",
          "desc": "A course to learn Flexbox",
          "url": "https://mastery.games/p/flexbox-zombies",
          "tags": ["educational", "beginner", "challenges"]
        },
        {
          "title": "CSS Gridgarden",
          "desc": "A game to learn Grid",
          "url": "https://cssgridgarden.com",
          "tags": ["educational", "beginner", "template"]
        },
        {
          "title": "30 Seconds of Code",
          "desc": "A curated collection of useful CSS snippets you can understand in 30 seconds or less.",
          "url": "https://www.30secondsofcode.org/css/",
          "tags": ["tips", "tricks", "collection"]
        },
        {
          "title": "Grid by example",
          "desc": "Everything you need to learn CSS Grid Layout",
          "url": "https://gridbyexample.com/learn/",
          "tags": ["example", "showcase", "educational"]
        },
        {
          "title": "BEM naming convention",
          "desc": "Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development",
          "url": "https://getbem.com/",
          "tags": ["convention", "naming", "structure"]
        },
        {
          "title": "CSS Triggers",
          "desc": "Overview of css attributes which trigger either layout, paint or composite. Good to know if you want to learn more about css performance.",
          "url": "https://csstriggers.com/",
          "tags": ["performance", "rendering"]
        },
        {
          "title": "A complete guide to flexbox",
          "desc": "A comprehensive guide to flexbox, focusing on all the different possible properties for the parent element (the flex container).",
          "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          "tags": ["guide", "educational", "examples"]
        },
        {
          "title": "Learn CSS layout",
          "desc": "This site teaches the CSS fundamentals that are used in any website's layout.",
          "url": "http://learnlayout.com",
          "tags": ["layout", "educational", "beginner"]
        },
        {
          "title": "CSSmatic - box shadow generator",
          "desc": "The ultimate box shadow generator",
          "url": "https://www.cssmatic.com/box-shadow",
          "tags": ["generator", "visual tool", "interactive"]
        },
        {
          "title": "AirBnB CSS / Sass Styleguide",
          "desc": "A mostly reasonable approach to css and sass.",
          "url": "https://github.com/airbnb/css",
          "tags": ["structure", "styleguide", "convention"]
        },
        {
          "title": "Animista",
          "desc": "CSS animations on demand.",
          "url": "http://animista.net/",
          "tags": ["animation", "collection", "generator", "visual tool"]
        },
        {
          "title": "Use CSS Grids the right way",
          "desc": "CSS Grid is robust, flexible, and a refreshing paradigm shift from other CSS layout systems. While these are selling points for Grid, they also make it hard to learn.",
          "url": "https://vgpena.github.io/using-css-grid-the-right-way/",
          "tags": ["guide", "educational", "overview"]
        },
        {
          "title": "CSS Protips",
          "desc": "A collection of tips to help take your CSS skills pro.",
          "url": "https://github.com/AllThingsSmitty/css-protips#readme",
          "tags": ["collection", "tips", "tricks"]
        },
        {
          "title": "Flexbox Defense",
          "desc": "Your job is to stop the incoming enemies from getting past your defenses. Unlike other tower defense games, you must position your towers using CSS!",
          "url": "http://www.flexboxdefense.com/",
          "tags": ["educational", "beginner", "game"]
        },
        {
          "title": "CSS Diner",
          "desc": "Learn CSS selectors while playing a game.",
          "url": "https://flukeout.github.io/",
          "tags": ["educational", "beginner", "selectors"]
        },
        {
          "title": "CSS Animation",
          "desc": "CSS animation articles, tips and tutorials. Level Up Your CSS Animation Skills.",
          "url": "https://cssanimation.rocks/",
          "tags": ["collection", "guide", "educational"]
        },
        {
          "title": "JustREM",
          "desc": "Easily and quickly convert pixel values into rem values.",
          "url": "https://justrem.xyz/",
          "tags": ["units", "convert", "instant"]
        },
        {
          "title": "(Re)learn css layout",
          "desc": "If you find yourself wrestling with CSS layout, it’s likely you’re making decisions for browsers they should be making themselves. Through a series of simple, composable layouts, Every Layout will teach you how to better harness the built-in algorithms that power browsers and CSS.",
          "url": "https://every-layout.dev/",
          "tags": ["educational", "guide", "blog"]
        },
        {
          "title": "Interactive CSS box-model view",
          "desc": "Learn CSS box-model by interractively changing the values.",
          "url": "https://codepen.io/carolineartz/full/ogVXZj",
          "tags": ["visual tool", "educational", "beginner"]
        },
        {
          "title": "Bennett Feely clip-path maker",
          "desc": "This CSS clip-path maker helps you understand the clip-path property and all the cool things you can do with it.",
          "url": "https://bennettfeely.com/clippy/",
          "tags": ["interactive", "visual", "shapes"]
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.is-active {
  padding: 3px;
  border-radius: 1.2rem;
  background: linear-gradient(132deg, #0940ae, #2a6df4, #2d9bf5, #104ecc, #00abfb, #2a6df4, #064ad4, #ffffff, #2a6df4, #00b8fd, #0940ae);
	background-size: 2000% 2000%;
	animation: rotatingBorder 10s ease-in-out infinite;
}
@keyframes rotatingBorder {
  0%{ background-position:0% 50% }
  50%{ background-position:100% 50% }
  100%{ background-position:0% 50% }
}
button, a {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
