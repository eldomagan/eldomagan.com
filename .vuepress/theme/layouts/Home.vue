<template>
  <div class="min-h-screen w-full">
    <div class="h-screen bg-grey-lighter flex flex-col">
      <navbar/>
      <main>
        <Content/>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
