const { createSlice } = require("@reduxjs/toolkit");


// createSlice contains name of the slice and initial state and reducer function which contains all the functionality 
const initialState={
    count:100
}
export const CounterSlice=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        }
    }
    
})

export const {increment,decrement}=CounterSlice.actions;
export default CounterSlice.reducer;