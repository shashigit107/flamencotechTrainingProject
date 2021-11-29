import { fetchApi, inputHandler,assendinghandler,desendingHandler } from "./Action";
// import { inputHandler } from "./Action";
function mapDispatchToProps(dispatch){
    return{
        fetchApi:()=>dispatch(fetchApi()),
        inputHandler:(text)=>dispatch(inputHandler(text)),
        assendinghandler:(Data)=>dispatch(assendinghandler(Data)),
        desendingHandler:(Data)=>dispatch(desendingHandler(Data)),
        
    }
}
export default mapDispatchToProps