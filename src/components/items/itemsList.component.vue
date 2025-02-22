<script setup lang="ts">
import type { ItemInterface } from '../../models/items/Item.interface';
import ItemComponent from '../children/Item.component.vue';

defineProps<{ items: ItemInterface[] }>()
// defineProps<{ items: any[] }>()

// define emits for custom events
// const emit = defineEmits(['selectItem']) // <-- using only an array of strings
const emit = defineEmits<{(e: 'selectItem', id: number): any}>()


// item click handler
const handleClick = (item: ItemInterface) => {
    emit('selectItem', item.id) // modify the body of the method by just emitting

    // item.selected = !item.selected
    // console.log('handleItemClick', item.id, item.selected)
}

</script>

<template>
    <div>
        <h3>Items:</h3>
        <!-- <ul>
            <li v-for="(item, index) in items" :key="item.id" @click="handleClick(item)">
                {{ item.id }} [{{ item.selected }}]
            </li>
        </ul> -->
        <ItemComponent v-for="(item, index) in items" :key="item.id" :model="item" @select-item="handleClick(item)" />
    </div>
</template>