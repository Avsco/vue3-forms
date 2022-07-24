<script setup>
import { ref } from 'vue';

const categoryOptions = ['Web Development', 'Programming', 'Design', 'Other'];

const event = ref({
  extras: {},
});
</script>

<template>
  <h1>Vue form</h1>
  <div>
    <h2>Name & describe your event</h2>
    <BaseInput id="title" label="Title" v-model="event.title" />
    <BaseInput id="description" label="Description" v-model="event.description" />

    <h2>Where is your event?</h2>
    <BaseInput id="location" label="Location" v-model="event.location" />

    <h2>Select a category</h2>
    <BaseSelect
      id="categoty"
      label="Category"
      v-model="event.category"
      :options="categoryOptions"
    />

    <h2>Extras</h2>
    <BaseCheckbox id="catering" v-model="event.extras.catering" label="Catering" />
    <BaseCheckbox id="music" v-model="event.extras.music" label="Music" />

    <h2>Are pats allowed?</h2>
    <BaseRadio v-model="event.pets" name="pets" :value="1" label="Yes" />
    <BaseRadio v-model="event.pets" name="pets" :value="0" label="No" />
  </div>

  <pre style="text-align: left">
  {{ event }}
  </pre>
</template>

<style scoped></style>
