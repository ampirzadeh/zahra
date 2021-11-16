<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h1 v-text="document.title" />
    <p v-text="document.description" />

    <NuxtContent :document="document" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  async asyncData({ $content }) {
    const document = await $content('hello').fetch()

    return { document }
  },
}
</script>
