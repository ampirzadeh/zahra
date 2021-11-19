<template>
  <main class="container px-3 pt-10 mx-auto prose">
    <small>Curriculum Vitae of</small>
    <h1 v-text="`${Name} ${Surname}`" />

    <article>
      <h2 class="!mt-0 !mb-1">Personal Data</h2>
      <div class="flex flex-col w-full gap-3 lg:flex-row">
        <img
          class="md:w-1/2 object-contain !m-0"
          :src="Image"
          :alt="ImageDesc"
        />
        <div id="personal-data" class="w-3/4 py-4 leading-snug md:order-first">
          <p v-for="PD in PersonalData" :key="PD">
            <b v-text="PD" />: {{ $data[PD] }}
          </p>
          <p class="!mb-1">
            <b>Emails</b>:
            <a
              v-for="email in Emails"
              :key="email"
              class="block"
              :href="`mailto:${email}`"
              v-text="email"
            />
          </p>
          <p>
            <b>Address</b>:
            <address v-text="Address"> </address>
          </p>
        </div>
      </div>
    </article>
    <NuxtContent :document="document" />
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({ $content }) {
    const document = await $content('resume').fetch()

    return { document, ...document }
  },
  data() {
    return {
      PersonalData: [
        'Name',
        'Surname',
        'Nationality',
        'Gender',
        'Date of birth',
        'Marital status',
      ],
    }
  },
}
</script>
