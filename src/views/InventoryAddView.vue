<template>
  <div class="inventory-add-view">
    <NewInventoryForm v-model="newTitle" :is-loading @on-submit="createNewItem" />
    <GoBackToInventoryLink class="inventory-add-view__go-back" />
  </div>
</template>

<script setup lang="ts">
import GoBackToInventoryLink from '@/components/layouts/GoBackToInventoryLink.vue'
import NewInventoryForm from '@/components/templates/inventory-add/NewInventoryForm.vue'
import useInventoryAddView from '@/composables/useInventoryAddView'

const { newTitle, isLoading, createNewItem } = useInventoryAddView()
</script>

<style scoped lang="scss">
.inventory-add-view {
  padding: 1rem;
  max-width: 40rem;
  margin: 0 auto;

  &__go-back {
    margin-top: 10rem;
  }
}
</style>
