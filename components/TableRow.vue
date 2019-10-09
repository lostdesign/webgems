<template lang="pug">
  tr.tableRow(:class="{ rowActive: isActive }")
    td.tableRow--title {{resource.title}}
    td.tableRow--description {{resource.desc}}
    td.tableRow--links
      tr
        td
          a.tableRow--reference(@click='createCopyUrl(resource)') Copy
        td
          a.tableRow--target(:href="resource.url" :target='resource.title' rel='noreferrer') Open
</template>

<script>
export default {
  props: ['resource', 'isActive', 'createCopyUrl'],
};
</script>


<style lang="scss" scoped>
.rowActive {
    box-shadow:inset 0px 0px 0px 3px #08e5ff;
}

.tableRow {
  background: #2d3748;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: .3rem;
  transition: 0.2s ease-in-out;
  width: 1fr;
  display: grid;
  grid-template-columns: minmax(150px, 2fr) 8fr 125px;

  &--title {
    color: white;
    font-weight: 900;
    width: 80%;
  }

  &--description {
    line-height: 1.3;
    font-size: 13px;
    color: white;
    width: 80%;
  }

  &--links {
    cursor: pointer;

    tr {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    img {
      width: 1rem;
      margin-left: 0.5rem;
    }

    &:hover::before {
      opacity: 0.5;
    }
  }

  &--reference {
    font-size: 12px;

    &::before {
      position: absolute;
      height: 0.95rem;
      width: 0.95rem;
      margin-left: -1.15rem;
      margin-top: 0.3rem;
      content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA4ZTVmZiI+PHBhdGggZD0iTSA0IDIgQyAzLjkwNSAyIDMuODE1NjA5NCAyLjAxNDM0MzggMy43MjQ2MDk0IDIuMDI3MzQzOCBDIDMuNDM0NjA5NCAyLjE0MzM0MzggMy4xMzk3MDMxIDIuMjU3MDkzOCAyLjg0NTcwMzEgMi4zNzEwOTM4IEMgMi4zMzQ3MDMxIDIuNzMzMDkzOCAyIDMuMzI2IDIgNCBMIDIgMTggTCA0IDE4IEwgNCA0IEwgMTggNCBMIDE4IDIgTCA0IDIgeiBNIDggNiBDIDYuODk1IDYgNiA2Ljg5NSA2IDggTCA2IDIwIEMgNiAyMS4xMDUgNi44OTUgMjIgOCAyMiBMIDIwIDIyIEMgMjEuMTA1IDIyIDIyIDIxLjEwNSAyMiAyMCBMIDIyIDggQyAyMiA2Ljg5NSAyMS4xMDUgNiAyMCA2IEwgOCA2IHogTSAxNyA4LjAwMTk1MzEgQyAxNy43NjggOC4wMDE5NTMxIDE4LjUzNjA5NCA4LjI5MzkwNjIgMTkuMTIxMDk0IDguODc4OTA2MiBDIDE5LjY4ODA5NCA5LjQ0NDkwNjMgMjAgMTAuMTk5IDIwIDExIEMgMjAgMTEuODAxIDE5LjY4ODA5NCAxMi41NTQwOTQgMTkuMTIxMDk0IDEzLjEyMTA5NCBMIDE3LjIyNDYwOSAxNS4wMTc1NzggTCAxNS44MTA1NDcgMTMuNjAzNTE2IEwgMTcuNzA3MDMxIDExLjcwNzAzMSBDIDE3Ljg5NjAzMSAxMS41MTgwMzEgMTggMTEuMjY3IDE4IDExIEMgMTggMTAuNzMzIDE3Ljg5NjAzMSAxMC40ODE5NjkgMTcuNzA3MDMxIDEwLjI5Mjk2OSBDIDE3LjMxNjAzMSA5LjkwMTk2ODcgMTYuNjgzOTY5IDkuOTAyOTY4OCAxNi4yOTI5NjkgMTAuMjkyOTY5IEwgMTQuMzkwNjI1IDEyLjE5NTMxMiBMIDE1LjgwNDY4OCAxMy42MDkzNzUgTCAxMy44MDA3ODEgMTUuNjEzMjgxIEwgMTUuMjE0ODQ0IDE3LjAyNzM0NCBMIDEzLjExOTE0MSAxOS4xMjEwOTQgQyAxMi41NTQxNDEgMTkuNjg3MDk0IDExLjgwMSAyMCAxMSAyMCBDIDEwLjE5OSAyMCA5LjQ0NDkwNjMgMTkuNjg4MDk0IDguODc4OTA2MiAxOS4xMjEwOTQgQyA4LjMxMjkwNjMgMTguNTU1MDk0IDggMTcuODAxIDggMTcgQyA4IDE2LjE5OSA4LjMxMjkwNjIgMTUuNDQ1OTA2IDguODc4OTA2MiAxNC44Nzg5MDYgTCAxMC45NzI2NTYgMTIuNzg1MTU2IEwgMTIuMzg2NzE5IDE0LjE5OTIxOSBMIDE0LjM2OTE0MSAxMi4yMTY3OTcgTCAxMi45NTUwNzggMTAuODAyNzM0IEwgMTQuODc4OTA2IDguODc4OTA2MiBDIDE1LjQ2MzkwNiA4LjI5MzkwNjIgMTYuMjMyIDguMDAxOTUzMSAxNyA4LjAwMTk1MzEgeiBNIDEyLjM3MzA0NyAxNC4yMTI4OTEgTCAxMC4yOTI5NjkgMTYuMjkyOTY5IEMgMTAuMTAzOTY5IDE2LjQ4MTk2OSAxMCAxNi43MzMgMTAgMTcgQyAxMCAxNy4yNjcgMTAuMTAzOTY5IDE3LjUxODAzMSAxMC4yOTI5NjkgMTcuNzA3MDMxIEMgMTAuNjcxOTY5IDE4LjA4NjAzMSAxMS4zMjgwMzEgMTguMDg1MDMxIDExLjcwNzAzMSAxNy43MDcwMzEgTCAxMy43ODcxMDkgMTUuNjI2OTUzIEwgMTIuMzczMDQ3IDE0LjIxMjg5MSB6IiBmaWxsPSIjMDhlNWZmIi8+PC9zdmc+Cg==");
    }
  }
  
  &--target {
    font-size: 12px;

    &::before {
      position: absolute;
      height: 0.95rem;
      width: 0.95rem;
      margin-left: -1.15rem;
      margin-top: 0.3rem;
      content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA4ZTVmZiI+PHBhdGggc3R5bGU9ImxpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0Yjtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWwiIGQ9Ik0gNSAzIEMgMy45MDY5MzcyIDMgMyAzLjkwNjkzNzIgMyA1IEwgMyAxOSBDIDMgMjAuMDkzMDYzIDMuOTA2OTM3MiAyMSA1IDIxIEwgMTkgMjEgQyAyMC4wOTMwNjMgMjEgMjEgMjAuMDkzMDYzIDIxIDE5IEwgMjEgMTIgTCAxOSAxMiBMIDE5IDE5IEwgNSAxOSBMIDUgNSBMIDEyIDUgTCAxMiAzIEwgNSAzIHogTSAxNCAzIEwgMTQgNSBMIDE3LjU4NTkzOCA1IEwgOC4yOTI5Njg4IDE0LjI5Mjk2OSBMIDkuNzA3MDMxMiAxNS43MDcwMzEgTCAxOSA2LjQxNDA2MjUgTCAxOSAxMCBMIDIxIDEwIEwgMjEgMyBMIDE0IDMgeiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIHdoaXRlLXNwYWNlPSJub3JtYWwiIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSIjMDhlNWZmIi8+PC9zdmc+Cg==");
    }
  }
}
</style>
