import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from '../services/product.service'

const initialState = [];

export const createProduct = createAsyncThunk(
  "tutorials/create",
  async ({ title, description }) => {
    const res = await ProductService.create({ title, description });
    return res.data;
  }
);

export const retrieveProducts = createAsyncThunk(
  "tutorials/retrieve",
  async () => {
    const res = await ProductService.getAll();
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "tutorials/update",
  async ({ id, data }) => {
    const res = await ProductService.update(id, data);
    return res.data;
  }
);

export const deleteProduct  = createAsyncThunk(
  "tutorials/delete",
  async ({ id }) => {
    await ProductService.remove(id);
    return { id };
  }
);

export const deleteAllProducts  = createAsyncThunk(
  "tutorials/deleteAll",
  async () => {
    const res = await ProductService.removeAll();
    return res.data;
  }
);

export const findProductsByTitle = createAsyncThunk(
  "tutorials/findByTitle",
  async ({ title }) => {
    const res = await ProductService.findByTitle(title);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [createProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveProducts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateProduct.fulfilled]: (state, action) => {
      const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteProduct.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllProducts.fulfilled]: (state, action) => {
      return [];
    },
    [findProductsByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = productSlice;
export default reducer;