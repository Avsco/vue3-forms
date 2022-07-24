<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <BaseRadio
    v-for="option in options"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    :name="name"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>
