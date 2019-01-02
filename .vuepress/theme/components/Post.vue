<template>
  <div>
    <router-link tag="div" :to="post.path" class="mb-8 rounded overflow-hidden bg-white shadow hover:shadow-md cursor-pointer"
      :class="{ flex: large, large }">
      <!-- <div class="header" :class="{ 'flex-1': large }" :style="`background-image: url(https://tailwindcss.com/img/card-top.jpg)`"></div> -->
      <div class="flex-1">
        <div class="px-6" :class="large ? 'py-6' : 'py-4' ">
          <h2 class="mb-2">{{ post.title }}</h2>
          <p class="text-grey-dark text-sm mb-4">{{ post.date.format('MMM DD, YYYY') }}</p>
          <p class="text-grey-darker text-base">
            {{ post.frontmatter.description }}
          </p>
        </div>
        <div class="px-6 py-4">
          <span v-for="tag in tags"
            :key="tag"
            class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #{{ tag }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },

    large: Boolean
  },

  computed: {
    tags () {
      return (this.post.frontmatter.tags || '')
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag)
    }
  }
}
</script>

<style scoped>
  .header {
    height: 150px;
    background-position: center;
    background-size: cover;
  }

  .large .header {
    min-height: 300px;
  }
</style>
