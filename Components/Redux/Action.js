import axios from "axios";
export const fetchUsersSuccess = (users) => {
    return {
        type: "FETCH_API",
        payload:users
    }

}
export const assendingSuccess=(Sort)=>{
    // console.log(Sort)
    return{
        type:"ASSENDING_HANDLER",
        payload:Sort,
        
    }
}
export const desendingSuccess=(Sort)=>{
  return{
    type:"DESENDING_HANDLER",
    payload:Sort
  }
}
// export const inputHandler=(text)=>{

//     return{
//         type:"INPUT_HANDLER",
//         payload:text
//     }
// }
export const fetchApi = () => {
    return async (dispatch) => {
        const resp = await axios.get('http://jsonplaceholder.typicode.com/users')
        const users = resp.data
        dispatch(fetchUsersSuccess(users))
    }
}
export const inputHandler=(text)=>{
    return async (dispatch) => {
        const resp = await axios.get('http://jsonplaceholder.typicode.com/users')
        const users = resp.data
        const update =users.filter((parameter)=>{
                  if(text===""){
                    return parameter
                  }else{
                    return parameter.name.toLowerCase().includes(text.toLowerCase()) 
                  }
               })
        dispatch(fetchUsersSuccess(update))
    }
}
export const assendinghandler=(data)=>{
      const  Data=[...data];
    
  return (dispatch)=>{
    console.log('reached ascending handler dispatch');


    const Sort=Data.sort((a,b)=>{
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                  return -1;
                }
                else if(a.name.toLowerCase()>b.name.toLowerCase()){
                  return 1;
                }
                
              })
              // let data=[]
              // data=Sort
              // setTimeout(()=>{
                dispatch(assendingSuccess(Sort))
              // },100)
               
             
            }
}
export const desendingHandler=(data)=>{
  const  Data=[...data];
  return (dispatch)=>{

    const Sort=Data.sort((a,b)=>{
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                  return 1;
                }
                else if(a.name.toLowerCase()>b.name.toLowerCase()){
                  return -1;
                }
                
              })
              
                dispatch(desendingSuccess(Sort))
             
            }
        
       
}