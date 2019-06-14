<template lang="pug">
  .card(:class="checkReference")
    p.card--title {{title}}
    p.card--description {{desc}}
    .card--links
      a.card--reference(@click='createCopyUrl') Copy
      br
      a.card--target(:href="url" :target='title' rel='noreferrer') Open
</template>

<script>
export default {
  props: ['title', 'desc', 'url'],
  methods: {
     async createCopyUrl() {
      try {
        let currentPath = this.$router.history.current.path
        let reference =  this.createReferenceTag(this.$props.title)

        await this.$copyText(`https://webgems.io${currentPath}?card=${reference}`)
        this.$router.push(`${currentPath}?card=${reference}`)
      } catch (e) {
        console.error(e);
      }
    },
    createReferenceTag(tag){
      return tag.replace(/ /g, '').toLowerCase()
    }
  },
  computed: {
    checkReference(){
      if(this.$route.query.card) {
        const query = this.$route.query.card
        const title = this.createReferenceTag(this.$props.title)

        return title === query
          ? 'card--active'
          : ''
      }
    }
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

  &--active {
    box-shadow:inset 0px 0px 0px 3px #08e5ff;
  }

  &--reference {
    cursor: pointer;

    &::before {
    	// content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiBmaWxsPSIjMjkyOTI5Ij48ZyBpZD0ic3VyZmFjZTEiIGZpbGw9IiMyOTI5MjkiPjxwYXRoIHN0eWxlPSIgIiBkPSJNIDcuNSAxIEMgNi44NzEwOTQgMSA2LjQyOTY4OCAxLjQ0NTMxMyA2LjIxMDkzOCAyIEwgMy41IDIgQyAyLjY3NTc4MSAyIDIgMi42NzU3ODEgMiAzLjUgTCAyIDEyLjUgQyAyIDEzLjMyNDIxOSAyLjY3NTc4MSAxNCAzLjUgMTQgTCA2IDE0IEwgNiAxMyBMIDMuNSAxMyBDIDMuMjE4NzUgMTMgMyAxMi43ODEyNSAzIDEyLjUgTCAzIDMuNSBDIDMgMy4yMTg3NSAzLjIxODc1IDMgMy41IDMgTCA1IDMgTCA1IDUgTCAxMCA1IEwgMTAgMyBMIDExLjUgMyBDIDExLjc4MTI1IDMgMTIgMy4yMTg3NSAxMiAzLjUgTCAxMiA3IEwgMTMgNyBMIDEzIDMuNSBDIDEzIDIuNjc1NzgxIDEyLjMyNDIxOSAyIDExLjUgMiBMIDguNzg5MDYzIDIgQyA4LjU3MDMxMyAxLjQ0NTMxMyA4LjEyODkwNiAxIDcuNSAxIFogTSA3LjUgMiBDIDcuNzgxMjUgMiA4IDIuMjE4NzUgOCAyLjUgTCA4IDMgTCA5IDMgTCA5IDQgTCA2IDQgTCA2IDMgTCA3IDMgTCA3IDIuNSBDIDcgMi4yMTg3NSA3LjIxODc1IDIgNy41IDIgWiBNIDcuNSA4IEMgNy4yMjI2NTYgOCA3IDguMjIyNjU2IDcgOC41IEMgNyA4Ljc3NzM0NCA3LjIyMjY1NiA5IDcuNSA5IEMgNy43NzczNDQgOSA4IDguNzc3MzQ0IDggOC41IEMgOCA4LjIyMjY1NiA3Ljc3NzM0NCA4IDcuNSA4IFogTSA5LjUgOCBDIDkuMjIyNjU2IDggOSA4LjIyMjY1NiA5IDguNSBDIDkgOC43NzczNDQgOS4yMjI2NTYgOSA5LjUgOSBDIDkuNzc3MzQ0IDkgMTAgOC43NzczNDQgMTAgOC41IEMgMTAgOC4yMjI2NTYgOS43NzczNDQgOCA5LjUgOCBaIE0gMTEuNSA4IEMgMTEuMjIyNjU2IDggMTEgOC4yMjI2NTYgMTEgOC41IEMgMTEgOC43NzczNDQgMTEuMjIyNjU2IDkgMTEuNSA5IEMgMTEuNzc3MzQ0IDkgMTIgOC43NzczNDQgMTIgOC41IEMgMTIgOC4yMjI2NTYgMTEuNzc3MzQ0IDggMTEuNSA4IFogTSAxMy41IDggQyAxMy4yMjI2NTYgOCAxMyA4LjIyMjY1NiAxMyA4LjUgQyAxMyA4Ljc3NzM0NCAxMy4yMjI2NTYgOSAxMy41IDkgQyAxMy43NzczNDQgOSAxNCA4Ljc3NzM0NCAxNCA4LjUgQyAxNCA4LjIyMjY1NiAxMy43NzczNDQgOCAxMy41IDggWiBNIDcuNSAxMCBDIDcuMjIyNjU2IDEwIDcgMTAuMjIyNjU2IDcgMTAuNSBDIDcgMTAuNzc3MzQ0IDcuMjIyNjU2IDExIDcuNSAxMSBDIDcuNzc3MzQ0IDExIDggMTAuNzc3MzQ0IDggMTAuNSBDIDggMTAuMjIyNjU2IDcuNzc3MzQ0IDEwIDcuNSAxMCBaIE0gMTMuNSAxMCBDIDEzLjIyMjY1NiAxMCAxMyAxMC4yMjI2NTYgMTMgMTAuNSBDIDEzIDEwLjc3NzM0NCAxMy4yMjI2NTYgMTEgMTMuNSAxMSBDIDEzLjc3NzM0NCAxMSAxNCAxMC43NzczNDQgMTQgMTAuNSBDIDE0IDEwLjIyMjY1NiAxMy43NzczNDQgMTAgMTMuNSAxMCBaIE0gNy41IDEyIEMgNy4yMjI2NTYgMTIgNyAxMi4yMjI2NTYgNyAxMi41IEMgNyAxMi43NzczNDQgNy4yMjI2NTYgMTMgNy41IDEzIEMgNy43NzczNDQgMTMgOCAxMi43NzczNDQgOCAxMi41IEMgOCAxMi4yMjI2NTYgNy43NzczNDQgMTIgNy41IDEyIFogTSAxMy41IDEyIEMgMTMuMjIyNjU2IDEyIDEzIDEyLjIyMjY1NiAxMyAxMi41IEMgMTMgMTIuNzc3MzQ0IDEzLjIyMjY1NiAxMyAxMy41IDEzIEMgMTMuNzc3MzQ0IDEzIDE0IDEyLjc3NzM0NCAxNCAxMi41IEMgMTQgMTIuMjIyNjU2IDEzLjc3NzM0NCAxMiAxMy41IDEyIFogTSA3LjUgMTQgQyA3LjIyMjY1NiAxNCA3IDE0LjIyMjY1NiA3IDE0LjUgQyA3IDE0Ljc3NzM0NCA3LjIyMjY1NiAxNSA3LjUgMTUgQyA3Ljc3NzM0NCAxNSA4IDE0Ljc3NzM0NCA4IDE0LjUgQyA4IDE0LjIyMjY1NiA3Ljc3NzM0NCAxNCA3LjUgMTQgWiBNIDkuNSAxNCBDIDkuMjIyNjU2IDE0IDkgMTQuMjIyNjU2IDkgMTQuNSBDIDkgMTQuNzc3MzQ0IDkuMjIyNjU2IDE1IDkuNSAxNSBDIDkuNzc3MzQ0IDE1IDEwIDE0Ljc3NzM0NCAxMCAxNC41IEMgMTAgMTQuMjIyNjU2IDkuNzc3MzQ0IDE0IDkuNSAxNCBaIE0gMTEuNSAxNCBDIDExLjIyMjY1NiAxNCAxMSAxNC4yMjI2NTYgMTEgMTQuNSBDIDExIDE0Ljc3NzM0NCAxMS4yMjI2NTYgMTUgMTEuNSAxNSBDIDExLjc3NzM0NCAxNSAxMiAxNC43NzczNDQgMTIgMTQuNSBDIDEyIDE0LjIyMjY1NiAxMS43NzczNDQgMTQgMTEuNSAxNCBaIE0gMTMuNSAxNCBDIDEzLjIyMjY1NiAxNCAxMyAxNC4yMjI2NTYgMTMgMTQuNSBDIDEzIDE0Ljc3NzM0NCAxMy4yMjI2NTYgMTUgMTMuNSAxNSBDIDEzLjc3NzM0NCAxNSAxNCAxNC43NzczNDQgMTQgMTQuNSBDIDE0IDE0LjIyMjY1NiAxMy43NzczNDQgMTQgMTMuNSAxNCBaICIgZmlsbD0iIzI5MjkyOSIvPjwvZz48L3N2Zz4=);
      // background-size: 20px 20px;
      // width: 20px;
      // height:20px;
    }
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
    font-weight: 900;
    margin: 0;
  }

  &--description {
    display: flex;
    align-content: stretch;
    flex: 1 1 auto;
    flex-direction: column;
    font-size: 13px;
    color: white;
    margin: 0 0 .7rem 0;
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
      position:absolute;
      height: .9rem;
      width: .9rem;
      margin-left: -1.15rem;
      margin-top: -.1rem;
      content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA4ZTVmZiI+PHBhdGggZD0iTSA0IDIgQyAzLjkwNSAyIDMuODE1NjA5NCAyLjAxNDM0MzggMy43MjQ2MDk0IDIuMDI3MzQzOCBDIDMuNDM0NjA5NCAyLjE0MzM0MzggMy4xMzk3MDMxIDIuMjU3MDkzOCAyLjg0NTcwMzEgMi4zNzEwOTM4IEMgMi4zMzQ3MDMxIDIuNzMzMDkzOCAyIDMuMzI2IDIgNCBMIDIgMTggTCA0IDE4IEwgNCA0IEwgMTggNCBMIDE4IDIgTCA0IDIgeiBNIDggNiBDIDYuODk1IDYgNiA2Ljg5NSA2IDggTCA2IDIwIEMgNiAyMS4xMDUgNi44OTUgMjIgOCAyMiBMIDIwIDIyIEMgMjEuMTA1IDIyIDIyIDIxLjEwNSAyMiAyMCBMIDIyIDggQyAyMiA2Ljg5NSAyMS4xMDUgNiAyMCA2IEwgOCA2IHogTSAxNyA4LjAwMTk1MzEgQyAxNy43NjggOC4wMDE5NTMxIDE4LjUzNjA5NCA4LjI5MzkwNjIgMTkuMTIxMDk0IDguODc4OTA2MiBDIDE5LjY4ODA5NCA5LjQ0NDkwNjMgMjAgMTAuMTk5IDIwIDExIEMgMjAgMTEuODAxIDE5LjY4ODA5NCAxMi41NTQwOTQgMTkuMTIxMDk0IDEzLjEyMTA5NCBMIDE3LjIyNDYwOSAxNS4wMTc1NzggTCAxNS44MTA1NDcgMTMuNjAzNTE2IEwgMTcuNzA3MDMxIDExLjcwNzAzMSBDIDE3Ljg5NjAzMSAxMS41MTgwMzEgMTggMTEuMjY3IDE4IDExIEMgMTggMTAuNzMzIDE3Ljg5NjAzMSAxMC40ODE5NjkgMTcuNzA3MDMxIDEwLjI5Mjk2OSBDIDE3LjMxNjAzMSA5LjkwMTk2ODcgMTYuNjgzOTY5IDkuOTAyOTY4OCAxNi4yOTI5NjkgMTAuMjkyOTY5IEwgMTQuMzkwNjI1IDEyLjE5NTMxMiBMIDE1LjgwNDY4OCAxMy42MDkzNzUgTCAxMy44MDA3ODEgMTUuNjEzMjgxIEwgMTUuMjE0ODQ0IDE3LjAyNzM0NCBMIDEzLjExOTE0MSAxOS4xMjEwOTQgQyAxMi41NTQxNDEgMTkuNjg3MDk0IDExLjgwMSAyMCAxMSAyMCBDIDEwLjE5OSAyMCA5LjQ0NDkwNjMgMTkuNjg4MDk0IDguODc4OTA2MiAxOS4xMjEwOTQgQyA4LjMxMjkwNjMgMTguNTU1MDk0IDggMTcuODAxIDggMTcgQyA4IDE2LjE5OSA4LjMxMjkwNjIgMTUuNDQ1OTA2IDguODc4OTA2MiAxNC44Nzg5MDYgTCAxMC45NzI2NTYgMTIuNzg1MTU2IEwgMTIuMzg2NzE5IDE0LjE5OTIxOSBMIDE0LjM2OTE0MSAxMi4yMTY3OTcgTCAxMi45NTUwNzggMTAuODAyNzM0IEwgMTQuODc4OTA2IDguODc4OTA2MiBDIDE1LjQ2MzkwNiA4LjI5MzkwNjIgMTYuMjMyIDguMDAxOTUzMSAxNyA4LjAwMTk1MzEgeiBNIDEyLjM3MzA0NyAxNC4yMTI4OTEgTCAxMC4yOTI5NjkgMTYuMjkyOTY5IEMgMTAuMTAzOTY5IDE2LjQ4MTk2OSAxMCAxNi43MzMgMTAgMTcgQyAxMCAxNy4yNjcgMTAuMTAzOTY5IDE3LjUxODAzMSAxMC4yOTI5NjkgMTcuNzA3MDMxIEMgMTAuNjcxOTY5IDE4LjA4NjAzMSAxMS4zMjgwMzEgMTguMDg1MDMxIDExLjcwNzAzMSAxNy43MDcwMzEgTCAxMy43ODcxMDkgMTUuNjI2OTUzIEwgMTIuMzczMDQ3IDE0LjIxMjg5MSB6IiBmaWxsPSIjMDhlNWZmIi8+PC9zdmc+Cg==');
    }
  }
  &--target {
    &::before {
      position:absolute;
      height: .9rem;
      width: .9rem;
      margin-left: -1.15rem;
      margin-top: -.1rem;
      content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA4ZTVmZiI+PHBhdGggc3R5bGU9ImxpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0Yjtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWwiIGQ9Ik0gNSAzIEMgMy45MDY5MzcyIDMgMyAzLjkwNjkzNzIgMyA1IEwgMyAxOSBDIDMgMjAuMDkzMDYzIDMuOTA2OTM3MiAyMSA1IDIxIEwgMTkgMjEgQyAyMC4wOTMwNjMgMjEgMjEgMjAuMDkzMDYzIDIxIDE5IEwgMjEgMTIgTCAxOSAxMiBMIDE5IDE5IEwgNSAxOSBMIDUgNSBMIDEyIDUgTCAxMiAzIEwgNSAzIHogTSAxNCAzIEwgMTQgNSBMIDE3LjU4NTkzOCA1IEwgOC4yOTI5Njg4IDE0LjI5Mjk2OSBMIDkuNzA3MDMxMiAxNS43MDcwMzEgTCAxOSA2LjQxNDA2MjUgTCAxOSAxMCBMIDIxIDEwIEwgMjEgMyBMIDE0IDMgeiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIHdoaXRlLXNwYWNlPSJub3JtYWwiIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSIjMDhlNWZmIi8+PC9zdmc+Cg==');
    }
  }
}
</style>
