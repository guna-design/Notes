import { createSlice } from "@reduxjs/toolkit";

export const SliceContent =createSlice({

    name:"Note",
    initialState:[
        {
            title: "Sample Note",
            note: "Create a Note By Adding Title & Note in Required Feild given & Click Enter To Edit click edit Symbol on th top right of the Note Card edit the Note and again click enter to Save the Changes",
            
        }
    ],
    reducers:{
        create:(state,action)=>{
            state.push(action.payload);

        },
        edit:(state,action)=>{
            state.splice(action.payload.param,1,action.payload.values);
        },
        deleteit:(state,action)=>{
            state.splice(action.payload,1);
        }
    }

})
export const{create,edit,deleteit}=SliceContent.actions
export default SliceContent.reducer