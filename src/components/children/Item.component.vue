<template>
    <li :data-testid="testid" :class="cssclass" @click="handleClick">
        <div class="selected-indicator">*</div>
        <div class="name">{{ model.name }} [{{ model.selected }}]</div>
    </li>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { ItemInterface } from '../../models/items/Item.interface';

export default defineComponent({
    name: 'ItemComponent',
    emits: ['selectItem'],
    props: {
        // add testid prop here as well
        testid: {
            default: 'not-set'
        },
        // expose a property called model of type ItemInterface
        model: {
            type: Object as PropType<ItemInterface>,
            default: () => {
                return {}
            }
        }
    },
    setup(props, { emit }) {
        // a computed property to return a different css alss based on the selected value
        const cssClass = computed(() => {
            let css = 'item'
            if (props.model.selected) {
                css += ' selected'
            }
            return css.trim()
        })

        // on click event handler that will emit a @select custom event 
        const handleClick = () => {
            emit('selectItem', props.model.id)
        }

        return {
            cssClass,
            handleClick
        }
    }
})
</script>