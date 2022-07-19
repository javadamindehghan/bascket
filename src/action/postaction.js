export const fetchdata=(posts)=>{
    return async (dispatch)=>{
        await dispatch({type:'FETCHDATA',payload:posts})
    }
}
export const increamentdata=(post ,force)=>{
   
return async (dispatch,getstate)=>{
    const data=getstate()
    const indexcurrent=data.findIndex(i=>i.title==post)
    data[indexcurrent].count=(data[indexcurrent].count)+1
     force()
  await  dispatch({type:'INCREAMENTDATA',payload:data})
}
}
export const decreamentdata=(post ,force)=>{
   
return async (dispatch,getstate)=>{
    const data=getstate()
    const indexcurrent=data.findIndex(i=>i.title==post)
    data[indexcurrent].count=(data[indexcurrent].count)-1
     force()
  await  dispatch({type:'DECREAMENTDATA',payload:data})
}
}