<script setup lang="ts">
import { reactive } from 'vue';
import itemsListComponent from './components/items/itemsList.component.vue';
import type { ItemInterface } from './models/items/Item.interface';

// mock some data:
const myItems = reactive([
  { id: 1, name: 'item1', selected: true },
  { id: 2, name: 'item2', selected: false },
  { id: 3, name: 'item3', selected: false },
])

// selectedItem handler 
const onSelectItem = (id: number) => {
  // retrieve the item from out local data
  const item = myItems.find(o => o.id === id)
  if (!item) {
    console.warn(`onSelectItem: could not find item with id: ${id}`)
    return 
  }
  // update the item property
  item.selected = !item.selected
  console.log('onSelectItem', item.id, item.selected)
}
</script>

<template>
  <div class="home">
    <itemsListComponent :items="myItems" @select-item="onSelectItem" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
