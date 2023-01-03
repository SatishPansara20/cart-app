import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCartProuducts: 0,
  subTotal: 0,
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.cartProducts.push(action.payload);

        let tpInC = state.cartProducts.length;
        state.totalCartProuducts = tpInC;
        let tA = [];
        if (tpInC !== 0) {
          tA = state.cartProducts.map((product) => {
            const total = +product.prod_quantity * product.prod_price;
            return total;
          });

          state.subTotal = tA.reduce((a, b) => {
            return a + b;
          });
        }
      },
      prepare(selectedItem) {
        const { id, prod_name, prod_price, prod_quantity, image } =
          selectedItem;
        return {
          payload: {
            id,
            prod_name,
            prod_price,
            prod_quantity,
            image,
          },
        };
      },
    },

    removeProduct(state, action) {
      const id = action.payload;

      const checkExitence = state.cartProducts.find(
        (product) => product.id === id
      );
      if (checkExitence) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== id
        );

        let tpInC = state.cartProducts.length;
        state.totalCartProuducts = tpInC;
        let tA = [];
        if (tpInC !== 0) {
          tA = state.cartProducts.map((product) => {
            const total = +product.prod_quantity * product.prod_price;
            return total;
          });

          state.subTotal = tA.reduce((a, b) => {
            return a + b;
          });
        }
      }
    },

    updateProduct(state, action) {
      const { id, prod_quantity } = action.payload;
      const checkExitence = state.cartProducts.find(
        (product) => product.id === id
      );
      if (checkExitence) {
        checkExitence.prod_quantity =
          checkExitence.prod_quantity + prod_quantity;
      }
    },

    // totalPayAbleAmount: (state, action) => {
    //   state.subTotal = action.payload.reduce((a, b) => {
    //     return a + b;
    //   });
    // },
  },
});

export const selectAllProducts = (state) => state.cartItems.cartProducts;
export const NumberOfProudctsInCart = (state) =>
  state.cartItems.totalCartProuducts;
export const totalAmount = (state) => state.cartItems.subTotal;

export const { addProduct, removeProduct, updateProduct } = cartSlice.actions;

export default cartSlice.reducer;
