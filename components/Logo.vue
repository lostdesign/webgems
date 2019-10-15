<template lang="pug">
  .logo(@click="goToHome")
    .gem
    p webgems.io
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>


<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
  .gem {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIGZpbGw9IiMwRDQ3QTEiIHBvaW50cz0iMzMsMTcgNDMsMTcgMjQsNDIgIi8+PHBvbHlnb24gZmlsbD0iIzg0RkZGRiIgcG9pbnRzPSI1LDE3IDE1LDUgMTUsMTcgIi8+PHBvbHlnb24gZmlsbD0iIzE5NzZEMiIgcG9pbnRzPSIzMyw1IDMzLDE3IDQzLDE3ICIvPjxnPjxwb2x5Z29uIGZpbGw9IiMwMDkxRUEiIHBvaW50cz0iMTUsMTcgMjMuOTk2LDQyLjE0OSAzMywxNyAiLz48cG9seWdvbiBmaWxsPSIjMDA5MUVBIiBwb2ludHM9IjE1LDUgMjQsNSAxNSwxNyAiLz48cG9seWdvbiBmaWxsPSIjMDA5MUVBIiBwb2ludHM9IjI0LDUgMzMsMTcgMzMsNSAiLz48L2c+PGc+PHBvbHlnb24gZmlsbD0iIzAwQjBGRiIgcG9pbnRzPSIzMywxNyAxNSwxNyAyNCw1ICIvPjxwb2x5Z29uIGZpbGw9IiMwMEIwRkYiIHBvaW50cz0iMzMsMTcgMzgsMTUgNDMsMTcgMzgsMTkgIi8+PC9nPjxnPjxwb2x5Z29uIGZpbGw9IiMwMEU1RkYiIHBvaW50cz0iMTUsMTcgNSwxNyAyMy45OTYsNDIuMTQ5ICIvPjxwb2x5Z29uIGZpbGw9IiMwMEU1RkYiIHBvaW50cz0iMTUsMTcgMjQsMTUgMzMsMTcgMjQsMTkgIi8+PC9nPjxwb2x5Z29uIGZpbGw9IiNFMEY3RkEiIHBvaW50cz0iNSwxNyAxMCwxNSAxNSwxNyAxMCwxOSAiLz48L3N2Zz4=);
    background-size: cover;
    width: 35px;
    height: 35px;
  }
  p {
    margin: 0 0 0 0.3rem;
    font-size: 14px;
  }
}
</style>
