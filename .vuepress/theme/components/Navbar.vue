<template>
  <nav class="py-4 md:py-8 px-4 bg-transparent w-full">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <a href="/" class="flex items-center flex-no-shrink no-underline text-grey-darker text-3xl">
        @eldomagan
      </a>
      <div class="w-auto flex items-center">
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
    navLinks () {
      return this.$page.path.includes('/blog/')
        ? this.$site.themeConfig.blogNav
        : this.$site.themeConfig.homeNav
    }
  }
}
</script>
