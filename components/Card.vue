<template lang="pug">
  .card(:class="{ cardActive: isActive }")
    .card--meta
      img.card--favicon(:src="'https://www.google.com/s2/favicons?domain=' + resource.url" aria-hidden="true")
      a.card--title(:href="resource.url" :target='resource.title' rel='noreferrer') {{resource.title}}
    p.card--description {{resource.desc}}
    .card--links
      a.card--reference(@click='createCopyUrl(resource)') Copy
      br
      a.card--target(:href="resource.url" :target='resource.title' rel='noreferrer') Open
</template>

<script>
export default {
  props: {
    resource: Object,
    isActive: Boolean,
    createCopyUrl: Function,
  },
}
</script>


<style lang="scss" scoped>
.card {
  background: #2D3748;
  border-radius: .3rem;
  padding: 1rem;
  transition: .2s ease-in-out;
  display: flex;
  flex-direction: column;
  position: relative;

  &Active {
    box-shadow:inset 0px 0px 0px 3px #08e5ff;
  }

  &--meta {
    display: flex;
    justify-content: flex-start;
  }

  &--favicon {
    height: 16px;
    width: 16px;
    margin-top: 0.3rem;
    margin-right: 0.5rem;

  }

  &--reference {
    cursor: pointer;
    display: flex;
  }

  &--target {
    cursor: pointer;
    display: flex;
  }

  &--links {
    display:flex;
    justify-content:flex-end;

    img {
      width: 1rem;
      margin-left: .5rem;
    }
  }

  &--title { 
    font-size: 16px !important;
    font-weight: 600;
    margin: 0 !important;
  }

  &--description {
    display: flex;
    align-content: stretch;
    flex: 1 1 auto;
    flex-direction: column;
    font-size: 13px;
    color: white;
    margin: .7rem 0 .7rem 0;
    line-height: 1.3;
    letter-spacing: .5px;
    max-width: 15rem;
  }
  a {
    font-size: 12px;
    line-height: 1;
    align-self: flex-end;
    margin-left: 1.7rem;

    &:hover::before {
      opacity: .5;
    }
  }
  &--reference {
    &::before {
      align-self: flex-start;
      padding-right: 0.2rem;
      height: .9rem;
      width: .9rem;
      margin-top: -.1rem;
      content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA4ZTVmZiI+PHBhdGggZD0iTSA0IDIgQyAzLjkwNSAyIDMuODE1NjA5NCAyLjAxNDM0MzggMy43MjQ2MDk0IDIuMDI3MzQzOCBDIDMuNDM0NjA5NCAyLjE0MzM0MzggMy4xMzk3MDMxIDIuMjU3MDkzOCAyLjg0NTcwMzEgMi4zNzEwOTM4IEMgMi4zMzQ3MDMxIDIuNzMzMDkzOCAyIDMuMzI2IDIgNCBMIDIgMTggTCA0IDE4IEwgNCA0IEwgMTggNCBMIDE4IDIgTCA0IDIgeiBNIDggNiBDIDYuODk1IDYgNiA2Ljg5NSA2IDggTCA2IDIwIEMgNiAyMS4xMDUgNi44OTUgMjIgOCAyMiBMIDIwIDIyIEMgMjEuMTA1IDIyIDIyIDIxLjEwNSAyMiAyMCBMIDIyIDggQyAyMiA2Ljg5NSAyMS4xMDUgNiAyMCA2IEwgOCA2IHogTSAxNyA4LjAwMTk1MzEgQyAxNy43NjggOC4wMDE5NTMxIDE4LjUzNjA5NCA4LjI5MzkwNjIgMTkuMTIxMDk0IDguODc4OTA2MiBDIDE5LjY4ODA5NCA5LjQ0NDkwNjMgMjAgMTAuMTk5IDIwIDExIEMgMjAgMTEuODAxIDE5LjY4ODA5NCAxMi41NTQwOTQgMTkuMTIxMDk0IDEzLjEyMTA5NCBMIDE3LjIyNDYwOSAxNS4wMTc1NzggTCAxNS44MTA1NDcgMTMuNjAzNTE2IEwgMTcuNzA3MDMxIDExLjcwNzAzMSBDIDE3Ljg5NjAzMSAxMS41MTgwMzEgMTggMTEuMjY3IDE4IDExIEMgMTggMTAuNzMzIDE3Ljg5NjAzMSAxMC40ODE5NjkgMTcuNzA3MDMxIDEwLjI5Mjk2OSBDIDE3LjMxNjAzMSA5LjkwMTk2ODcgMTYuNjgzOTY5IDkuOTAyOTY4OCAxNi4yOTI5NjkgMTAuMjkyOTY5IEwgMTQuMzkwNjI1IDEyLjE5NTMxMiBMIDE1LjgwNDY4OCAxMy42MDkzNzUgTCAxMy44MDA3ODEgMTUuNjEzMjgxIEwgMTUuMjE0ODQ0IDE3LjAyNzM0NCBMIDEzLjExOTE0MSAxOS4xMjEwOTQgQyAxMi41NTQxNDEgMTkuNjg3MDk0IDExLjgwMSAyMCAxMSAyMCBDIDEwLjE5OSAyMCA5LjQ0NDkwNjMgMTkuNjg4MDk0IDguODc4OTA2MiAxOS4xMjEwOTQgQyA4LjMxMjkwNjMgMTguNTU1MDk0IDggMTcuODAxIDggMTcgQyA4IDE2LjE5OSA4LjMxMjkwNjIgMTUuNDQ1OTA2IDguODc4OTA2MiAxNC44Nzg5MDYgTCAxMC45NzI2NTYgMTIuNzg1MTU2IEwgMTIuMzg2NzE5IDE0LjE5OTIxOSBMIDE0LjM2OTE0MSAxMi4yMTY3OTcgTCAxMi45NTUwNzggMTAuODAyNzM0IEwgMTQuODc4OTA2IDguODc4OTA2MiBDIDE1LjQ2MzkwNiA4LjI5MzkwNjIgMTYuMjMyIDguMDAxOTUzMSAxNyA4LjAwMTk1MzEgeiBNIDEyLjM3MzA0NyAxNC4yMTI4OTEgTCAxMC4yOTI5NjkgMTYuMjkyOTY5IEMgMTAuMTAzOTY5IDE2LjQ4MTk2OSAxMCAxNi43MzMgMTAgMTcgQyAxMCAxNy4yNjcgMTAuMTAzOTY5IDE3LjUxODAzMSAxMC4yOTI5NjkgMTcuNzA3MDMxIEMgMTAuNjcxOTY5IDE4LjA4NjAzMSAxMS4zMjgwMzEgMTguMDg1MDMxIDExLjcwNzAzMSAxNy43MDcwMzEgTCAxMy43ODcxMDkgMTUuNjI2OTUzIEwgMTIuMzczMDQ3IDE0LjIxMjg5MSB6IiBmaWxsPSIjMDhlNWZmIi8+PC9zdmc+Cg==');
    }
  }
  &--target {
    &::before {
      align-self: flex-start;
      padding-right: 0.2rem;
      height: .9rem;
      width: .9rem;
      margin-top: -.1rem;
      content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA4ZTVmZiI+PHBhdGggc3R5bGU9ImxpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0Yjtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWwiIGQ9Ik0gNSAzIEMgMy45MDY5MzcyIDMgMyAzLjkwNjkzNzIgMyA1IEwgMyAxOSBDIDMgMjAuMDkzMDYzIDMuOTA2OTM3MiAyMSA1IDIxIEwgMTkgMjEgQyAyMC4wOTMwNjMgMjEgMjEgMjAuMDkzMDYzIDIxIDE5IEwgMjEgMTIgTCAxOSAxMiBMIDE5IDE5IEwgNSAxOSBMIDUgNSBMIDEyIDUgTCAxMiAzIEwgNSAzIHogTSAxNCAzIEwgMTQgNSBMIDE3LjU4NTkzOCA1IEwgOC4yOTI5Njg4IDE0LjI5Mjk2OSBMIDkuNzA3MDMxMiAxNS43MDcwMzEgTCAxOSA2LjQxNDA2MjUgTCAxOSAxMCBMIDIxIDEwIEwgMjEgMyBMIDE0IDMgeiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIHdoaXRlLXNwYWNlPSJub3JtYWwiIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSIjMDhlNWZmIi8+PC9zdmc+Cg==');
    }
  }
}
</style>
