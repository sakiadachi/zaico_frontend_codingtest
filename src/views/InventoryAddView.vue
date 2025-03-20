<template>
  <div class="inventory-add-view">
    <NewInventoryForm v-model="newTitle" @on-submit="createNewItem" />
    <div class="inventory-add-view__go-back">
      <router-link to="/">《 一覧へ戻る</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewInventoryForm from '@/components/templates/inventory-add/NewInventoryForm.vue'
import { useInventoryAddView } from '@/composables/useInventoryAddView'

const { newTitle, createNewItem } = useInventoryAddView()
</script>

<style scoped lang="scss">
.inventory-add-view {
  padding: 1rem;
  max-width: 40rem;
  margin: 0 auto;

  &__go-back {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
  }
}
</style>
