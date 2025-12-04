import { createSlice }  from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState : { value : 0},
    reducers : {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        reset : (state) => {
            state.value = 0;
        },
        incByValue : (state) => {
            state.value += 5;
        }
    }
})




export const { increment, decrement, reset, incByValue } = counterSlice.actions;
export default counterSlice.reducer;