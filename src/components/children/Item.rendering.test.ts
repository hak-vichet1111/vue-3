import type { ItemInterface } from "../../models/items/Item.interface";
import { render, screen } from "../../test-utils";
import { describe, it, expect, test } from "vitest";
import ItemComponent from "./Item.component.vue";

describe('Item.component: redering', () => {
    it('reders an Item text correctly', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }

        const testid = 'unit-test-appearance-1'

        // render component
        render<typeof ItemComponent>(ItemComponent, {
            props: {
                testid,
                model
            }
        })

        // get element reference by testid
        const liElement = screen.getByTestId(testid)

        // test 
        expect(liElement).not.toBeNull()
        expect(liElement.innerHTML).toContain('Unit test item 1')
    }),

    it('has expected css class when selected it true', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 2',
            selected: true /* note this is true */
        }

        const testid = 'unit-test-appearence-2'
        

        //render component
        render<typeof ItemComponent>(ItemComponent, {
            props: {
                testid,
                model
            }
        })
        // get element reference by testid
        const liElement = screen.getByTestId(testid)
        // test
        expect(liElement).not.toBeNull()
        // check that the element className attribute has the expected value
        expect(liElement.className).toContain('selected')
    }),

    it('hase expected css class when selected is false', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 3',
            selected: false /* note this is false */
        }

        const testid = 'unit-test-appearence-3'

        // render component 
        render<typeof ItemComponent>(ItemComponent, {
            props: {
                testid,
                model
            }
        })

        // get element reference by testid
        const liElement = screen.getByTestId(testid)
        // test 
        expect(liElement).not.toBeNull()
        // check that the element className attribute has the expected value
        expect(liElement.className).not.toContain('selected')
    })
})