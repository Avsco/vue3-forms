<script setup>
defineEmits(['update:modelValue']);

defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: [String, Number],
    default: true,
  },
});
</script>

<template>
  <div>
    <input
      v-bind="$attrs"
      :id="$attrs['name'] + value"
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <label v-if="label" :for="$attrs['name'] + value">{{ label }}</label>
  </div>
</template>
