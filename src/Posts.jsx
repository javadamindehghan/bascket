import { Button, Grid } from '@mui/material'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increamentdata } from './action/postaction';
import Post from './Post'

export default function Posts({handelforec}) {
    


    const dispatch = useDispatch()
    const posts = useSelector(state => state)
   
    let post=posts.map(post=>(
         <Grid justifyContent='center' alignItems='center' key={post.title} item xs={12} md={4}>
        <Post handelforec={handelforec}   postitem={post}/>
    </Grid>)
    )
    
    return (

        <div className='posts'>
            <Grid container justifyContent='center' alignItems='center'>
               {post}
              
            </Grid>
        </div>
    )
}
