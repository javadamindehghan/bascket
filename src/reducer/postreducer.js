export const postreducer=(state=[],action)=>{
    switch (action.type) {
        case 'FETCHDATA':
            
            return action.payload
            case 'INCREAMENTDATA':
             return action.payload
            case 'DECREAMENTDATA':
            
                return action.payload
        default:
           return state
    }
}