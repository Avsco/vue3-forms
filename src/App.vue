<script setup>
import { ref } from 'vue';

const categoryOptions = ['Web Development', 'Programming', 'Design', 'Other'];
const petOptions = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 },
];

const event = ref({
  extras: {},
});

const sendForm = async () => {
  try {
    const data = await fetch('https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events', {
      method: 'POST',
      body: event.value,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <h1>Vue form</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Name & describe your event</legend>
      <BaseInput id="title" label="Title" v-model="event.title" />
      <BaseInput id="description" label="Description" v-model="event.description" />
    </fieldset>

    <fieldset>
      <legend>Where is your event?</legend>
      <BaseInput id="location" label="Location" v-model="event.location" />
    </fieldset>

    <fieldset>
      <legend>Select a category</legend>
      <BaseSelect
        id="categoty"
        label="Category"
        v-model="event.category"
        :options="categoryOptions"
      />
    </fieldset>

    <fieldset>
      <legend>Extras</legend>
      <BaseCheckbox id="catering" v-model="event.extras.catering" label="Catering" />
      <BaseCheckbox id="music" v-model="event.extras.music" label="Music" />
    </fieldset>

    <fieldset>
      <legend>Are pats allowed?</legend>
      <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
    </fieldset>

    <button type="submit">Submit</button>
  </form>

  <pre style="text-align: left">
  {{ event }}
  </pre>
</template>

<style scoped></style>
