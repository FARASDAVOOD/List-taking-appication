import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../axios';

export const fetchUsers = createAsyncThunk('FormSlice/fetchUsers', async () => {
  try {
    const response = await api.get('/values');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
});

const initialState = {
  products: [],
};

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    edit: (state, action) => {
      const productToEdit = state.products.find(product => product.id === action.payload);
      if (productToEdit) {
        const updatedProduct = { ...productToEdit, isEditing: true };
        api.put(`/values/${action.payload}`, updatedProduct);
      }
    },
    delet: (state, action) => {
      api.delete(`/values/${action.payload}`);
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    update: (state, action) => {
    //   const updatedData = {
    //     isEditing: false,
    //     dis: action.payload.dis1,
    //     color: action.payload.color1,
    //     title: action.payload.title1,
    //   };
    const productToEdit = state.products.find(product => product.id === action.payload.id);
    if (productToEdit) {
      const updatedProduct = {  isEditing: false,
        dis: action.payload.dis1,
        color: action.payload.color1,
        title: action.payload.title1, };
      api.put(`/values/${action.payload.id}`, updatedProduct);
    }

      
    },
    submit:(state,action)=>{
      api.post(`/values`,{title:action.payload.title,dis:action.payload.dis,color:action.payload.color,isEditing:false})
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.error('Failed to fetch users:', action.error);
    });
  },
});

export default FormSlice.reducer;
export const { edit, delet, update, submit } = FormSlice.actions;
