<template>
  <blog-layout>
    <section class="hero">
      <div class="w-full max-w-md px-2 md:mx-auto py-4 md:py-8">
        <div class="flex flex-col items-center py-12 md:py-16">
          <h1 class="text-center mb-3 text-italic">
            {{ post.title }}
          </h1>
          <p class="mt-2">
            {{ post.date.format('MMM DD, YYYY')}}
          </p>
          <p class="mt-6">
            <span v-for="tag in tags" :key="tag"
              class="inline-block bg-grey-light rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
              #{{ tag }}
            </span>
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-md w-full px-4 md:mx-auto">
        <Content class="text-justify"/>
      </div>
    </section>
  </blog-layout>
</template>

<script>
import moment from 'moment'
import BlogLayout from './Blog'

export default {
  components: {
    BlogLayout
  },

  computed: {
    post () {
      const page = this.$page.frontmatter
      const [date, format = 'mm-dd-yyyy'] = page.date.split('|').map(x => x.trim())

      return {
        ...page,
        date: moment(date, format)
      }
    },

    tags () {
      return (this.post.tags || '').split(',').map(x => x.trim())
    }
  }
}
</script>

<style>

</style>
