import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { increamentdata } from "./action/postaction";
import { decreamentdata } from "./action/postaction";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
export default function Countercar({postitem,handelforec}) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.state)
    return (
        <div>
          <Button onClick={()=>dispatch(increamentdata(postitem.title,handelforec))} variant="contained" color="success">
        <AddCircleIcon/>
        </Button>
        <Button variant="text">{postitem.count}</Button>
        {(postitem.count==1)?
        <Button onClick={()=>dispatch(decreamentdata(postitem.title,handelforec))} variant="contained" color="success">
       <CloseIcon/>
        </Button>
        :
        
        <Button onClick={()=>dispatch(decreamentdata(postitem.title,handelforec))} variant="contained" color="success">
       <DoNotDisturbOnIcon/>
        </Button>}
        
        </div>
    )
}
