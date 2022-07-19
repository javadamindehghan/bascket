import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increamentdata } from "./action/postaction";
import Countercar from './Countercar'
import mobile from './img/m.png'
import labtab from './img/l.jpg'
import tablet from './img/t.jpg'

export default function Post({postitem,handelforec}) {
 
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()

 const {image}=postitem
    return (
        <>
        <div className='post'>
        
       <img style={{height:'350px', width:'90%'}} src={image}/>
        
        <h4>{postitem.title}</h4>
        <h4> قیمت :{postitem.price}</h4>
        {(postitem.count>0)?<Countercar handelforec={handelforec} postitem={postitem}/>:<Button onClick={()=>dispatch(increamentdata(postitem.title,handelforec))} variant="contained" color="success">
        ADD TO CARD
        </Button>}
        </div>
        </>
    )
}
