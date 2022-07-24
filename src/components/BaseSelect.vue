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
  options: {
    type: Array,
    required: true,
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
    <select
      :id="id"
      :name="id"
      class="field"
      :value="modelValue"
      v-bind="{ ...$attrs, onChange: ($event) => $emit('update:modelValue', $event.target.value) }"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
