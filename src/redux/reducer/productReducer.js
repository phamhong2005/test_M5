import {createSlice} from "@reduxjs/toolkit";
import {add, getAll, remove, Update, updateForm} from "../service/productService";
import {get} from "axios";

const initialState = {
    list: [],
    productEdit: {}

}
const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.list = payload
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            state.list.push(payload)
        })
        builder.addCase(updateForm.fulfilled, (state, {payload}) => {
            state.productEdit = payload
        })
        builder.addCase(Update.fulfilled, (state, {payload}) => {
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id === payload.id) {
                    state.list[i] = payload
                }
            }
        })
        builder.addCase(remove.fulfilled, (state, {payload}) => {
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id === payload) {
                    state.list.splice(i, 1)
                }
            }
        })
    }
})
export default productSlice.reducer