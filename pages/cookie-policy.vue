<template lang="pug">
  main
    h1 Our Cookie Policy
    p We believe in being transparent about how we collect and use data. This policy provides information about how and when we use cookies for these purposes. Capitalized terms used in this policy but not defined have the meaning set forth in our&nbsp;
      nuxt-link.highlighted(to="privacy-policy") Privacy Policy
      | &nbsp;which also includes additional details about the collection and use of information at webgems.

    h2 What Is A Cookie?
    p Cookies are small text files sent by us to your computer or mobile device, which enables webgems features and functionality. They are unique to your account or your browser. Session-based cookies last only while your browser is open and are automatically deleted when you close your browser. Persistent cookies last until you or your browser delete them or until they expire.
    p To find out more about cookies, visit&nbsp;
      a.highlighted(href="https://www.allaboutcookies.org/") this
      | &nbsp;site.

    h2 Does Webgems Use Cookies?
    p Yes, unless your browser has "Do Not Track" enabled. Matomo creates a persistent cookie inside your browser which contains a Session ID. This Session ID is being used to analyze the usage of our website. No further cookies are created by webgems.

    h2 How Can You Get Rid Of Cookies?
    p Browser manufacturers provide help pages relating to cookie management in their products. Please see below for more information.
    ul
      li
        a(href="https://support.google.com/chrome/answer/95647?hl=en-GB", title="Google Chrome") Google Chrome
      li
        a(href="https://support.apple.com/en-us/guide/safari/manage-cookies-and-website-data-sfri11471/mac", title="Google Chrome") Safari Desktop
      li
        a(href="https://support.apple.com/en-us/HT201265", title="Google Chrome") Safari Mobile
      li
        a(href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer", title="Google Chrome") Mozilla Firefox
      li
        a(href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067", title="Google Chrome") Android
      li
        a(href="https://support.microsoft.com/en-us/kb/260971", title="Google Chrome") Internet Explorer

    h2 Opt Out From Tracking
    OptOutIframe

</template>

<script>
import OptOutIframe from '@/components/OptOutIframe.vue'

export default {
  components: {
    OptOutIframe,
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
}
</style>