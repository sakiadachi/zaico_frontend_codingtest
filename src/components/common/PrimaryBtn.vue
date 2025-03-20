<template>
  <button :class="[props.size]">{{ props.text }}</button>
</template>

<script setup lang="ts">
type ButtonSize = 'small' | 'medium' | 'large'

const props = withDefaults(
  defineProps<{
    text: string
    size?: ButtonSize
  }>(),
  {
    size: 'medium',
  },
)
</script>

<style scoped>
button {
  height: 3rem;
  width: 10rem;
  margin: auto;
  background-color: var(--color-primary);
  color: var(--vt-c-white);
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
}

.medium {
  width: 8rem;
  height: 3rem;
}
</style>
