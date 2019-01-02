<template>
  <component :is="layout"/>
</template>

<script>
import HomeLayout from './layouts/Home'
import BlogLayout from './layouts/Blog'
import BlogIndexLayout from './layouts/BlogIndex'
import BlogPostLayout from './layouts/BlogPost'

export default {
  components: {
    HomeLayout,
    BlogLayout,
    BlogIndexLayout,
    BlogPostLayout
  },

  computed: {
    layout () {
      const layoutName = this.$page.frontmatter.layout ||
        (this.$page.path.includes('articles') ? 'blog-post' : 'home')

      return `${layoutName}-layout`
    }
  }
}
</script>

<style lang="scss">
  @import './styles/theme.scss'
</style>
