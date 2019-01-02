<template>
  <blog-layout>
    <section class="hero">
      <div class="py-8 md:py-16">
        <div class="flex flex-col items-center py-12 md:py-20 w-full max-w-md px-2 md:mx-auto">
          <h1 class="text-center mb-3 text-italic">
            {{ $page.frontmatter.title }}
          </h1>
          <p class="text-center">
            {{ $page.frontmatter.subtitle }}
          </p>
        </div>
      </div>
    </section>
    <section class="articles">
      <div class="w-full max-w-lg px-3 md:mx-auto">
        <post v-for="(post, index) in recentPosts"
          :key="index"
          :post="post"
          :large="index === 0"/>
        </div>
      </div>
    </section>
  </blog-layout>
</template>

<script>
import moment from 'moment'
import BlogLayout from './Blog'
import Post from '../components/Post'

export default {
  components: {
    Post,
    BlogLayout
  },

  computed: {
    recentPosts () {
      const postsDir = this.$page.frontmatter.postsDir || 'articles'

      return this.$site.pages
        .filter(post => post.path.match(new RegExp(`blog/${postsDir}`)))
        .map(post => {
          const [date, format = 'mm-dd-yyyy'] = post.frontmatter.date.split('|').map(x => x.trim())
          post.date = moment(date, format)
          return post
        })
        .sort((post1, post2) => post2.date.valueOf() - post1.date.valueOf())
        .slice(0, 10)
    }
  }
}
</script>

<style>

</style>
