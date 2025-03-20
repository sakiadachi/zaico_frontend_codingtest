<template>
  <form class="new-inventory-form" @submit.prevent="emit('onSubmit')">
    <h2>新規登録</h2>

    <div class="new-inventory-form__form-item">
      <label for="title">タイトル: </label>
      <input
        id="title"
        v-model="model"
        type="text"
        name="title"
        minlength="1"
        maxlength="250"
        required
      />
    </div>

    <PrimaryBtn type="submit" text="登録" />
  </form>
</template>

<script setup lang="ts">
import PrimaryBtn from '@/components/parts/PrimaryBtn.vue'

const emit = defineEmits(['onSubmit'])
const model = defineModel<string>()
</script>

<style scoped lang="scss">
.new-inventory-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__form-item {
    display: flex;
    gap: 1rem;
  }

  input {
    flex-grow: 1;
  }
}
</style>
