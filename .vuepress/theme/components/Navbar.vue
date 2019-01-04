<template>
  <nav class="py-4 md:py-8 px-4 bg-transparent w-full" :class="{ 'absolute ping': !isBlog }">
    <div class="container mx-auto flex flex-col md:flex-row items-center md:justify-between flex-wrap">
      <a href="/" class="flex items-center flex-no-shrink no-underline text-grey-darker text-3xl">
        @eldomagan
      </a>
      <div class="w-auto flex items-center mt-3 md:mt-0">
        <a v-for="(nav, index) in navLinks"
          class="no-underline text-grey-darker"
          :class="{ 'ml-6': index !== 0 }"
          :key="index"
          :href="nav.link">
          {{ nav.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isBlog () {
      return this.$page.path.includes('/blog/')
    },

    navLinks () {
      return this.isBlog
        ? this.$site.themeConfig.blogNav
        : this.$site.themeConfig.homeNav
    }
  }
}
</script>
