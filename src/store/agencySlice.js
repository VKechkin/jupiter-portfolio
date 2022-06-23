import { createSlice } from "@reduxjs/toolkit";

const agencySlice = createSlice({
  name: "agency",
  initialState: {
    products: [],
    productsList: [],
    selectedProduct: '',
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProductsList(state, action) {
      state.productsList = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    }
  },
});

export default agencySlice.reducer;

export const { setProducts, setProductsList, setSelectedProduct } =
  agencySlice.actions;