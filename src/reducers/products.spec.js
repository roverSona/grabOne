import reducer, * as products from './menu'

describe('reducers', () => {
  describe('products', () => {
    let state

    describe('when products are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_MENU',
          products: [
            {
              id: 1,
              title: 'Product 1',
              inventory: 2
            },
            {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ]
        })
      })

      it('contains the products from the action', () => {
        expect(products.getItem(state, 1)).toEqual({
          id: 1,
          title: 'Product 1',
            inventory: 2
        })
        expect(products.getItem(state, 2)).toEqual({
          id: 2,
          title: 'Product 2',
            inventory: 1
        })
      })

      it ('contains no other products', () => {
        expect(products.getItem(state, 3)).toEqual(undefined)
      })

      it('lists all of the products as visible', () => {
        expect(products.getVisibleMenu(state)).toEqual([
          {
            id: 1,
            title: 'Product 1',
            inventory: 2
          }, {
            id: 2,
            title: 'Product 2',
            inventory: 1
          }
        ])
      })

      describe('when an item is added to the cart', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'ADD_TO_CART', productId: 1 })
        })

        it('the inventory is reduced', () => {
          expect(products.getVisibleMenu(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              inventory: 1
            }, {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ])
        })

      })

    })
  })
})
