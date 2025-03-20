<template>
  <form class="new-inventory-form" @submit.prevent="emit('onSubmit')">
    <h2>在庫作成</h2>
    <div class="form-item">
      <label for="title">タイトル: </label>
      <input
        id="title"
        v-model="model"
        type="text"
        name="title"
        minlength="5"
        maxlength="250"
        required
      />
      <button type="submit">新規作成</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['onSubmit'])
const model = defineModel<string>()
</script>

<style scoped>
.new-inventory-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.form-item {
  display: flex;
  gap: 1rem;
}
#title {
  width: 200px;
}
</style>
