<script setup>
defineEmits(['update:modelValue']);

defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  typeInput: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      v-bind="$attrs"
      class="field"
      :name="id"
      :type="typeInput"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
