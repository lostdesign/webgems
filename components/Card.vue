<template lang="pug">
  .card(:class="checkReference")
    //- a.card--link(:href="url" :target='title' rel='noreferrer')
    p.card--title {{title}}
    p.card--description {{desc}}
    div
      a.card--reference(@click='createCopyUrl') Copy reference
      br
      a(:href="url" :target='title' rel='noreferrer') Visit website
</template>

<script>
export default {
  props: ['title', 'desc', 'url'],
  methods: {
     async createCopyUrl() {
      try {
        let currentPath = this.$router.history.current.path
        let reference =  this.createReferenceTag(this.$props.title)

        await this.$copyText(`https://webgems.io${currentPath}/?card=${reference}`)
        this.$router.push(`${currentPath}/?card=${reference}`)
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
        if(title === query) console.log(query, title, title === query? 'card--active': '')

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

  &--active{
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

  &--link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  // &:hover {
  //   transform: scale(1.002);
  //   background: #008190;
  //   cursor: pointer;
  //   box-shadow: 0 4px 6px -1px rgba(45, 55, 72, 0.1), 0 2px 4px -1px rgba(45, 55, 72, 0.06);
  // }

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
  }
}


.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
