<template>
  <div class="inventory-add-view">
    <form class="inventory-add-view__form" @submit.prevent="createNewItem">
      <h2>新規登録</h2>

      <div class="inventory-add-view__form-item">
        <label for="title">タイトル: </label>
        <input
          id="title"
          v-model="newTitle"
          type="text"
          name="title"
          minlength="5"
          maxlength="250"
          required
        />
      </div>

      <PrimaryBtn type="submit" text="登録" />
    </form>
    <div class="inventory-add-view__go-back">
      <router-link to="/">《 一覧へ戻る</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryBtn from '@/components/common/PrimaryBtn.vue'
import { useInventoryAddView } from '@/composables/useInventoryAddView'

const { newTitle, createNewItem } = useInventoryAddView()
</script>

<style scoped lang="scss">
.inventory-add-view {
  padding: 1rem;
  max-width: 40rem;
  margin: 0 auto;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__form-item {
    display: flex;
    gap: 1rem;
  }

  &__go-back {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
  }
}

input {
  flex-grow: 1;
}
</style>
