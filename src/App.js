import logo from './logo.svg';
import './css/style.css'
import {useState} from 'react'
import Header from './Header';
import Posts from './Posts';
import { Grid } from '@mui/material';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchdata } from './action/postaction';
import Bascket from './Bascket'



const data=[
  {
    image:'https://images.timcheh.com/1/fill/350/350/sm/true/plain/http://static.timcheh.com/uploads/product-image/00/fa/30/d6/01/media-60ab35f9a6880.jpg?v=bb1ed2eb93cccb91002891a51f2ff102c9fa4126',
    title:'موبایل',
    price:1000,
    count:0

  },
  {
    image:'https://dkstatics-public.digikala.com/digikala-products/bae4a15494947baf5540c64afee44073415e2b26_1641303563.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
    title:'لب تاب',
    price:3000,
    count:0

  },
  {
    image:'https://dkstatics-public.digikala.com/digikala-products/120907669.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
    title:'تبلت',
    price:2000,
    count:0

  }
]

function App() {
  const [bascket, setbascket] = useState(false)
 const [force, setfirce] = useState(0)
 const handelforec=()=>{
  setfirce(c=>c+1)
    }
    const handelpage=(i)=>{
      setbascket(i)
    }
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(fetchdata(data))
   
  }, [])
  const state = useSelector(state => state)
  
  return(
    <>
    <Grid container justifyContent="center"alignItems="center">
        <Grid item xs={10} md={8}>
        <Header  handelpage={handelpage}/> 
       
        </Grid>
        {bascket?( <Grid alignItems xs={10} md={8}>
       <Bascket handelforec={handelforec}/>
        </Grid>): <Grid alignItems xs={10} md={8}>
          <Posts handelforec={handelforec} />
          </Grid>}
        
         
       
        
    </Grid>
    
    
     
   </>
  )
}

export default App;
