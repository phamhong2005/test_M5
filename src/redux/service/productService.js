import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:3000/products")
        return res.data
    }
)
export const add = createAsyncThunk(
    'product/add',
    async (newProduct) => {
        let res = await axios.post(" http://localhost:3000/products", newProduct)
        return res.data
    }
)
export const updateForm = createAsyncThunk(
    'products/editForm',
    async (id) => {
        let res = await axios.get("http://localhost:3000/products/" + id);
        return res.data
    }
)
export const Update = createAsyncThunk(
    'product/edit',
    async (productEdit) => {
        let res = await axios.put("http://localhost:3000/products/"+ productEdit.id,productEdit)
        return res.data
    }
)
export const remove = createAsyncThunk(
    'products/delete',
     async (id)=>{
       await axios.delete("http://localhost:3000/products/" +id)
        return id
    }
)
