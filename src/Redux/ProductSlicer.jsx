import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  selectedProducts: 0,
  productInfo: {
    prod_name: "Proudct ",
    prod_description: "Here is your Product Description",
    prod_price: "299",
    prod_quantity: "8",
    image: "",
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setDisplayPageNumber(state, action) {
      const page = action.payload;
      state.page = page;
    },

    incrementCurrnetPage(state) {
      state.page++;
    },

    decrementCurrnetPage(state) {
      state.page--;
    },

    updateProductInof(state, action) {
      const { prod_name, prod_description, prod_price, prod_quantity, image } =
        action.payload;
      state.productInfo.prod_name = prod_name;
      state.productInfo.prod_description = prod_description;
      state.productInfo.prod_price = prod_price;
      state.productInfo.prod_quantity = prod_quantity;
      state.productInfo.image = image;
    },
  },
});

export const selectAll = (state) => state.products;

export const currentPage = (state) => state.products.page;

export const {
  updateProductInof,
  setDisplayPageNumber,
  incrementCurrnetPage,
  decrementCurrnetPage,
} = productSlice.actions;

export default productSlice.reducer;
