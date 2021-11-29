

const initialState={
    Data2:"",
    Data:[],
    
}

   
const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_API":
            return{
                Data:action.payload
            }
        // case "INPUT_HANDLER":
        //     return{
        //         Data2:action.payload
        //     }
            case "ASSENDING_HANDLER":
                return{                      
                    Data:action.payload,
                }
        case "DESENDING_HANDLER":
            return{
                Data:action.payload
            }
        default:
            return state;
    }
}
export default Reducer;