import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormInput {
  _id: number;
  firstName: string;
  lastName: string;
  age: number;
  defaultOption: string;
  secondOption: string;
  locationSettings: string;
  number: number;
}

interface ProductItem {
  id: number;
  name: string;
}

interface SearchType {
  search: IFormInput[];
  product: ProductItem[];
  treu: boolean;
}

const initialState: SearchType = {
  product: [],
  treu: true,
  search: [],
};

export const ProductSlice = createSlice({
  name: "ALTEGIO",
  initialState,
  reducers: {
    AddProduct(state, action: PayloadAction<ProductItem>) {
      state.product = [...state.product, action.payload];
    },
    AddTrue(state, action: PayloadAction<boolean>) {
      state.treu = action.payload;
    },
    AddSearch(state, action: PayloadAction<IFormInput[]>) {
      state.search = action.payload;
    },
  },
});

export const { AddProduct, AddTrue, AddSearch } = ProductSlice.actions;
export default ProductSlice.reducer;
