<script setup>
defineEmits(['update:modelValue']);

defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
    <input
      :name="id"
      :id="id"
      type="checkbox"
      v-model="modelValue"
      class="field"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" :for="id">{{ label }}</label>
  </div>
</template>
